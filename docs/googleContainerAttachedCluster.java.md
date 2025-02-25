# `googleContainerAttachedCluster` Submodule <a name="`googleContainerAttachedCluster` Submodule" id="@cdktf/provider-google-beta.googleContainerAttachedCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleContainerAttachedCluster <a name="GoogleContainerAttachedCluster" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster google_container_attached_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedCluster;

GoogleContainerAttachedCluster.Builder.create(Construct scope, java.lang.String id)
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
    .distribution(java.lang.String)
    .fleet(GoogleContainerAttachedClusterFleet)
    .location(java.lang.String)
    .name(java.lang.String)
    .oidcConfig(GoogleContainerAttachedClusterOidcConfig)
    .platformVersion(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .authorization(GoogleContainerAttachedClusterAuthorization)
//  .binaryAuthorization(GoogleContainerAttachedClusterBinaryAuthorization)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .loggingConfig(GoogleContainerAttachedClusterLoggingConfig)
//  .monitoringConfig(GoogleContainerAttachedClusterMonitoringConfig)
//  .project(java.lang.String)
//  .proxyConfig(GoogleContainerAttachedClusterProxyConfig)
//  .securityPostureConfig(GoogleContainerAttachedClusterSecurityPostureConfig)
//  .timeouts(GoogleContainerAttachedClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.distribution">distribution</a></code> | <code>java.lang.String</code> | The Kubernetes distribution of the underlying attached cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | The platform version for the cluster (e.g. '1.23.0-gke.1'). |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.monitoringConfig">monitoringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.securityPostureConfig">securityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | security_posture_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.distribution"></a>

- *Type:* java.lang.String

The Kubernetes distribution of the underlying attached cluster.

Supported values:
"eks", "aks", "generic". The generic distribution provides the ability to register
or migrate any CNCF conformant cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#distribution GoogleContainerAttachedCluster#distribution}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.fleet"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#fleet GoogleContainerAttachedCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#location GoogleContainerAttachedCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}

---

##### `oidcConfig`<sup>Required</sup> <a name="oidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.oidcConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#oidc_config GoogleContainerAttachedCluster#oidc_config}

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.platformVersion"></a>

- *Type:* java.lang.String

The platform version for the cluster (e.g. '1.23.0-gke.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#platform_version GoogleContainerAttachedCluster#platform_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#annotations GoogleContainerAttachedCluster#annotations}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.authorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#authorization GoogleContainerAttachedCluster#authorization}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.binaryAuthorization"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#binary_authorization GoogleContainerAttachedCluster#binary_authorization}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#deletion_policy GoogleContainerAttachedCluster#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#description GoogleContainerAttachedCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#logging_config GoogleContainerAttachedCluster#logging_config}

---

##### `monitoringConfig`<sup>Optional</sup> <a name="monitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.monitoringConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#monitoring_config GoogleContainerAttachedCluster#monitoring_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}.

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.proxyConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#proxy_config GoogleContainerAttachedCluster#proxy_config}

---

##### `securityPostureConfig`<sup>Optional</sup> <a name="securityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.securityPostureConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#security_posture_config GoogleContainerAttachedCluster#security_posture_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#timeouts GoogleContainerAttachedCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization">putAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putBinaryAuthorization">putBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putFleet">putFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putLoggingConfig">putLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putMonitoringConfig">putMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig">putOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putProxyConfig">putProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putSecurityPostureConfig">putSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetBinaryAuthorization">resetBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetLoggingConfig">resetLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetMonitoringConfig">resetMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProxyConfig">resetProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetSecurityPostureConfig">resetSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorization` <a name="putAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization"></a>

```java
public void putAuthorization(GoogleContainerAttachedClusterAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

---

##### `putBinaryAuthorization` <a name="putBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putBinaryAuthorization"></a>

```java
public void putBinaryAuthorization(GoogleContainerAttachedClusterBinaryAuthorization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putBinaryAuthorization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

---

##### `putFleet` <a name="putFleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putFleet"></a>

```java
public void putFleet(GoogleContainerAttachedClusterFleet value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putFleet.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

---

##### `putLoggingConfig` <a name="putLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putLoggingConfig"></a>

```java
public void putLoggingConfig(GoogleContainerAttachedClusterLoggingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

---

##### `putMonitoringConfig` <a name="putMonitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putMonitoringConfig"></a>

```java
public void putMonitoringConfig(GoogleContainerAttachedClusterMonitoringConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putMonitoringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

---

##### `putOidcConfig` <a name="putOidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig"></a>

```java
public void putOidcConfig(GoogleContainerAttachedClusterOidcConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

---

##### `putProxyConfig` <a name="putProxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putProxyConfig"></a>

```java
public void putProxyConfig(GoogleContainerAttachedClusterProxyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putProxyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

---

##### `putSecurityPostureConfig` <a name="putSecurityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putSecurityPostureConfig"></a>

```java
public void putSecurityPostureConfig(GoogleContainerAttachedClusterSecurityPostureConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putSecurityPostureConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts"></a>

```java
public void putTimeouts(GoogleContainerAttachedClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetBinaryAuthorization` <a name="resetBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetBinaryAuthorization"></a>

```java
public void resetBinaryAuthorization()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingConfig` <a name="resetLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetLoggingConfig"></a>

```java
public void resetLoggingConfig()
```

##### `resetMonitoringConfig` <a name="resetMonitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetMonitoringConfig"></a>

```java
public void resetMonitoringConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetProxyConfig` <a name="resetProxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetProxyConfig"></a>

```java
public void resetProxyConfig()
```

##### `resetSecurityPostureConfig` <a name="resetSecurityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetSecurityPostureConfig"></a>

```java
public void resetSecurityPostureConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleContainerAttachedCluster resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedCluster;

GoogleContainerAttachedCluster.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedCluster;

GoogleContainerAttachedCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedCluster;

GoogleContainerAttachedCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedCluster;

GoogleContainerAttachedCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleContainerAttachedCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleContainerAttachedCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleContainerAttachedCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleContainerAttachedCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleContainerAttachedCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference">GoogleContainerAttachedClusterAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference">GoogleContainerAttachedClusterBinaryAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.clusterRegion">clusterRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.errors">errors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList">GoogleContainerAttachedClusterErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference">GoogleContainerAttachedClusterFleetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.kubernetesVersion">kubernetesVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfig">monitoringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference">GoogleContainerAttachedClusterOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference">GoogleContainerAttachedClusterProxyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.reconciling">reconciling</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfig">securityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference">GoogleContainerAttachedClusterSecurityPostureConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference">GoogleContainerAttachedClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.workloadIdentityConfig">workloadIdentityConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList">GoogleContainerAttachedClusterWorkloadIdentityConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorizationInput">authorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorizationInput">binaryAuthorizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distributionInput">distributionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleetInput">fleetInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfigInput">loggingConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfigInput">monitoringConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfigInput">oidcConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersionInput">platformVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfigInput">proxyConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfigInput">securityPostureConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distribution">distribution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorization"></a>

```java
public GoogleContainerAttachedClusterAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference">GoogleContainerAttachedClusterAuthorizationOutputReference</a>

---

##### `binaryAuthorization`<sup>Required</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorization"></a>

```java
public GoogleContainerAttachedClusterBinaryAuthorizationOutputReference getBinaryAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference">GoogleContainerAttachedClusterBinaryAuthorizationOutputReference</a>

---

##### `clusterRegion`<sup>Required</sup> <a name="clusterRegion" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.clusterRegion"></a>

```java
public java.lang.String getClusterRegion();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.errors"></a>

```java
public GoogleContainerAttachedClusterErrorsList getErrors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList">GoogleContainerAttachedClusterErrorsList</a>

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleet"></a>

```java
public GoogleContainerAttachedClusterFleetOutputReference getFleet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference">GoogleContainerAttachedClusterFleetOutputReference</a>

---

##### `kubernetesVersion`<sup>Required</sup> <a name="kubernetesVersion" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.kubernetesVersion"></a>

```java
public java.lang.String getKubernetesVersion();
```

- *Type:* java.lang.String

---

##### `loggingConfig`<sup>Required</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfig"></a>

```java
public GoogleContainerAttachedClusterLoggingConfigOutputReference getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigOutputReference</a>

---

##### `monitoringConfig`<sup>Required</sup> <a name="monitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfig"></a>

```java
public GoogleContainerAttachedClusterMonitoringConfigOutputReference getMonitoringConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigOutputReference</a>

---

##### `oidcConfig`<sup>Required</sup> <a name="oidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfig"></a>

```java
public GoogleContainerAttachedClusterOidcConfigOutputReference getOidcConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference">GoogleContainerAttachedClusterOidcConfigOutputReference</a>

---

##### `proxyConfig`<sup>Required</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfig"></a>

```java
public GoogleContainerAttachedClusterProxyConfigOutputReference getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference">GoogleContainerAttachedClusterProxyConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.reconciling"></a>

```java
public IResolvable getReconciling();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `securityPostureConfig`<sup>Required</sup> <a name="securityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfig"></a>

```java
public GoogleContainerAttachedClusterSecurityPostureConfigOutputReference getSecurityPostureConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference">GoogleContainerAttachedClusterSecurityPostureConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeouts"></a>

```java
public GoogleContainerAttachedClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference">GoogleContainerAttachedClusterTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `workloadIdentityConfig`<sup>Required</sup> <a name="workloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.workloadIdentityConfig"></a>

```java
public GoogleContainerAttachedClusterWorkloadIdentityConfigList getWorkloadIdentityConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList">GoogleContainerAttachedClusterWorkloadIdentityConfigList</a>

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.authorizationInput"></a>

```java
public GoogleContainerAttachedClusterAuthorization getAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

---

##### `binaryAuthorizationInput`<sup>Optional</sup> <a name="binaryAuthorizationInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.binaryAuthorizationInput"></a>

```java
public GoogleContainerAttachedClusterBinaryAuthorization getBinaryAuthorizationInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `distributionInput`<sup>Optional</sup> <a name="distributionInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distributionInput"></a>

```java
public java.lang.String getDistributionInput();
```

- *Type:* java.lang.String

---

##### `fleetInput`<sup>Optional</sup> <a name="fleetInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.fleetInput"></a>

```java
public GoogleContainerAttachedClusterFleet getFleetInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `loggingConfigInput`<sup>Optional</sup> <a name="loggingConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.loggingConfigInput"></a>

```java
public GoogleContainerAttachedClusterLoggingConfig getLoggingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

---

##### `monitoringConfigInput`<sup>Optional</sup> <a name="monitoringConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.monitoringConfigInput"></a>

```java
public GoogleContainerAttachedClusterMonitoringConfig getMonitoringConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oidcConfigInput`<sup>Optional</sup> <a name="oidcConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.oidcConfigInput"></a>

```java
public GoogleContainerAttachedClusterOidcConfig getOidcConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersionInput"></a>

```java
public java.lang.String getPlatformVersionInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `proxyConfigInput`<sup>Optional</sup> <a name="proxyConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.proxyConfigInput"></a>

```java
public GoogleContainerAttachedClusterProxyConfig getProxyConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

---

##### `securityPostureConfigInput`<sup>Optional</sup> <a name="securityPostureConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.securityPostureConfigInput"></a>

```java
public GoogleContainerAttachedClusterSecurityPostureConfig getSecurityPostureConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.distribution"></a>

```java
public java.lang.String getDistribution();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleContainerAttachedClusterAuthorization <a name="GoogleContainerAttachedClusterAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterAuthorization;

GoogleContainerAttachedClusterAuthorization.builder()
//  .adminGroups(java.util.List<java.lang.String>)
//  .adminUsers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminGroups">adminGroups</a></code> | <code>java.util.List<java.lang.String></code> | Groups that can perform operations as a cluster admin. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminUsers">adminUsers</a></code> | <code>java.util.List<java.lang.String></code> | Users that can perform operations as a cluster admin. |

---

##### `adminGroups`<sup>Optional</sup> <a name="adminGroups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminGroups"></a>

```java
public java.util.List<java.lang.String> getAdminGroups();
```

- *Type:* java.util.List<java.lang.String>

Groups that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the groups. Up to ten admin groups can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#admin_groups GoogleContainerAttachedCluster#admin_groups}

---

##### `adminUsers`<sup>Optional</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization.property.adminUsers"></a>

```java
public java.util.List<java.lang.String> getAdminUsers();
```

- *Type:* java.util.List<java.lang.String>

Users that can perform operations as a cluster admin.

A managed
ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
to the users. Up to ten admin users can be provided.

For more info on RBAC, see
https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#admin_users GoogleContainerAttachedCluster#admin_users}

---

### GoogleContainerAttachedClusterBinaryAuthorization <a name="GoogleContainerAttachedClusterBinaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterBinaryAuthorization;

GoogleContainerAttachedClusterBinaryAuthorization.builder()
//  .evaluationMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization.property.evaluationMode">evaluationMode</a></code> | <code>java.lang.String</code> | Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]. |

---

##### `evaluationMode`<sup>Optional</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization.property.evaluationMode"></a>

```java
public java.lang.String getEvaluationMode();
```

- *Type:* java.lang.String

Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#evaluation_mode GoogleContainerAttachedCluster#evaluation_mode}

---

### GoogleContainerAttachedClusterConfig <a name="GoogleContainerAttachedClusterConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterConfig;

GoogleContainerAttachedClusterConfig.builder()
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
    .distribution(java.lang.String)
    .fleet(GoogleContainerAttachedClusterFleet)
    .location(java.lang.String)
    .name(java.lang.String)
    .oidcConfig(GoogleContainerAttachedClusterOidcConfig)
    .platformVersion(java.lang.String)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .authorization(GoogleContainerAttachedClusterAuthorization)
//  .binaryAuthorization(GoogleContainerAttachedClusterBinaryAuthorization)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .loggingConfig(GoogleContainerAttachedClusterLoggingConfig)
//  .monitoringConfig(GoogleContainerAttachedClusterMonitoringConfig)
//  .project(java.lang.String)
//  .proxyConfig(GoogleContainerAttachedClusterProxyConfig)
//  .securityPostureConfig(GoogleContainerAttachedClusterSecurityPostureConfig)
//  .timeouts(GoogleContainerAttachedClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.distribution">distribution</a></code> | <code>java.lang.String</code> | The Kubernetes distribution of the underlying attached cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.fleet">fleet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | fleet block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.oidcConfig">oidcConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | oidc_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | The platform version for the cluster (e.g. '1.23.0-gke.1'). |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.authorization">authorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.binaryAuthorization">binaryAuthorization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | binary_authorization block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.loggingConfig">loggingConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | logging_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.monitoringConfig">monitoringConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | monitoring_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.proxyConfig">proxyConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | proxy_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.securityPostureConfig">securityPostureConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | security_posture_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.distribution"></a>

```java
public java.lang.String getDistribution();
```

- *Type:* java.lang.String

The Kubernetes distribution of the underlying attached cluster.

Supported values:
"eks", "aks", "generic". The generic distribution provides the ability to register
or migrate any CNCF conformant cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#distribution GoogleContainerAttachedCluster#distribution}

---

##### `fleet`<sup>Required</sup> <a name="fleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.fleet"></a>

```java
public GoogleContainerAttachedClusterFleet getFleet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

fleet block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#fleet GoogleContainerAttachedCluster#fleet}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#location GoogleContainerAttachedCluster#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}

---

##### `oidcConfig`<sup>Required</sup> <a name="oidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.oidcConfig"></a>

```java
public GoogleContainerAttachedClusterOidcConfig getOidcConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

oidc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#oidc_config GoogleContainerAttachedCluster#oidc_config}

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

The platform version for the cluster (e.g. '1.23.0-gke.1').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#platform_version GoogleContainerAttachedCluster#platform_version}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Annotations on the cluster. This field has the same
restrictions as Kubernetes annotations. The total size of all keys and
values combined is limited to 256k. Key can have 2 segments: prefix (optional)
and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
Name must be 63 characters or less, begin and end with alphanumerics,
with dashes (-), underscores (_), dots (.), and alphanumerics between.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#annotations GoogleContainerAttachedCluster#annotations}

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.authorization"></a>

```java
public GoogleContainerAttachedClusterAuthorization getAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#authorization GoogleContainerAttachedCluster#authorization}

---

##### `binaryAuthorization`<sup>Optional</sup> <a name="binaryAuthorization" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.binaryAuthorization"></a>

```java
public GoogleContainerAttachedClusterBinaryAuthorization getBinaryAuthorization();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

binary_authorization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#binary_authorization GoogleContainerAttachedCluster#binary_authorization}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Policy to determine what flags to send on delete. Possible values: DELETE, DELETE_IGNORE_ERRORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#deletion_policy GoogleContainerAttachedCluster#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human readable description of this attached cluster. Cannot be longer than 255 UTF-8 encoded bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#description GoogleContainerAttachedCluster#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#id GoogleContainerAttachedCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingConfig`<sup>Optional</sup> <a name="loggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.loggingConfig"></a>

```java
public GoogleContainerAttachedClusterLoggingConfig getLoggingConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

logging_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#logging_config GoogleContainerAttachedCluster#logging_config}

---

##### `monitoringConfig`<sup>Optional</sup> <a name="monitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.monitoringConfig"></a>

```java
public GoogleContainerAttachedClusterMonitoringConfig getMonitoringConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

monitoring_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#monitoring_config GoogleContainerAttachedCluster#monitoring_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}.

---

##### `proxyConfig`<sup>Optional</sup> <a name="proxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.proxyConfig"></a>

```java
public GoogleContainerAttachedClusterProxyConfig getProxyConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

proxy_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#proxy_config GoogleContainerAttachedCluster#proxy_config}

---

##### `securityPostureConfig`<sup>Optional</sup> <a name="securityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.securityPostureConfig"></a>

```java
public GoogleContainerAttachedClusterSecurityPostureConfig getSecurityPostureConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

security_posture_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#security_posture_config GoogleContainerAttachedCluster#security_posture_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterConfig.property.timeouts"></a>

```java
public GoogleContainerAttachedClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#timeouts GoogleContainerAttachedCluster#timeouts}

---

### GoogleContainerAttachedClusterErrors <a name="GoogleContainerAttachedClusterErrors" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterErrors;

GoogleContainerAttachedClusterErrors.builder()
    .build();
```


### GoogleContainerAttachedClusterFleet <a name="GoogleContainerAttachedClusterFleet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterFleet;

GoogleContainerAttachedClusterFleet.builder()
    .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet.property.project">project</a></code> | <code>java.lang.String</code> | The number of the Fleet host project where this cluster will be registered. |

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The number of the Fleet host project where this cluster will be registered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#project GoogleContainerAttachedCluster#project}

---

### GoogleContainerAttachedClusterLoggingConfig <a name="GoogleContainerAttachedClusterLoggingConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterLoggingConfig;

GoogleContainerAttachedClusterLoggingConfig.builder()
//  .componentConfig(GoogleContainerAttachedClusterLoggingConfigComponentConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig.property.componentConfig">componentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a></code> | component_config block. |

---

##### `componentConfig`<sup>Optional</sup> <a name="componentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig.property.componentConfig"></a>

```java
public GoogleContainerAttachedClusterLoggingConfigComponentConfig getComponentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

component_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#component_config GoogleContainerAttachedCluster#component_config}

---

### GoogleContainerAttachedClusterLoggingConfigComponentConfig <a name="GoogleContainerAttachedClusterLoggingConfigComponentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig;

GoogleContainerAttachedClusterLoggingConfigComponentConfig.builder()
//  .enableComponents(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents">enableComponents</a></code> | <code>java.util.List<java.lang.String></code> | The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"]. |

---

##### `enableComponents`<sup>Optional</sup> <a name="enableComponents" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig.property.enableComponents"></a>

```java
public java.util.List<java.lang.String> getEnableComponents();
```

- *Type:* java.util.List<java.lang.String>

The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#enable_components GoogleContainerAttachedCluster#enable_components}

---

### GoogleContainerAttachedClusterMonitoringConfig <a name="GoogleContainerAttachedClusterMonitoringConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterMonitoringConfig;

GoogleContainerAttachedClusterMonitoringConfig.builder()
//  .managedPrometheusConfig(GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig">managedPrometheusConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | managed_prometheus_config block. |

---

##### `managedPrometheusConfig`<sup>Optional</sup> <a name="managedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig.property.managedPrometheusConfig"></a>

```java
public GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig getManagedPrometheusConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

managed_prometheus_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#managed_prometheus_config GoogleContainerAttachedCluster#managed_prometheus_config}

---

### GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig <a name="GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig;

GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.builder()
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enable Managed Collection. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enable Managed Collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#enabled GoogleContainerAttachedCluster#enabled}

---

### GoogleContainerAttachedClusterOidcConfig <a name="GoogleContainerAttachedClusterOidcConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterOidcConfig;

GoogleContainerAttachedClusterOidcConfig.builder()
    .issuerUrl(java.lang.String)
//  .jwks(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.jwks">jwks</a></code> | <code>java.lang.String</code> | OIDC verification keys in JWKS format (RFC 7517). |

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#issuer_url GoogleContainerAttachedCluster#issuer_url}

---

##### `jwks`<sup>Optional</sup> <a name="jwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig.property.jwks"></a>

```java
public java.lang.String getJwks();
```

- *Type:* java.lang.String

OIDC verification keys in JWKS format (RFC 7517).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#jwks GoogleContainerAttachedCluster#jwks}

---

### GoogleContainerAttachedClusterProxyConfig <a name="GoogleContainerAttachedClusterProxyConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterProxyConfig;

GoogleContainerAttachedClusterProxyConfig.builder()
//  .kubernetesSecret(GoogleContainerAttachedClusterProxyConfigKubernetesSecret)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig.property.kubernetesSecret">kubernetesSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | kubernetes_secret block. |

---

##### `kubernetesSecret`<sup>Optional</sup> <a name="kubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig.property.kubernetesSecret"></a>

```java
public GoogleContainerAttachedClusterProxyConfigKubernetesSecret getKubernetesSecret();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

kubernetes_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#kubernetes_secret GoogleContainerAttachedCluster#kubernetes_secret}

---

### GoogleContainerAttachedClusterProxyConfigKubernetesSecret <a name="GoogleContainerAttachedClusterProxyConfigKubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret;

GoogleContainerAttachedClusterProxyConfigKubernetesSecret.builder()
    .name(java.lang.String)
    .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.name">name</a></code> | <code>java.lang.String</code> | Name of the kubernetes secret containing the proxy config. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace of the kubernetes secret containing the proxy config. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#name GoogleContainerAttachedCluster#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace of the kubernetes secret containing the proxy config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#namespace GoogleContainerAttachedCluster#namespace}

---

### GoogleContainerAttachedClusterSecurityPostureConfig <a name="GoogleContainerAttachedClusterSecurityPostureConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterSecurityPostureConfig;

GoogleContainerAttachedClusterSecurityPostureConfig.builder()
    .vulnerabilityMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode">vulnerabilityMode</a></code> | <code>java.lang.String</code> | Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"]. |

---

##### `vulnerabilityMode`<sup>Required</sup> <a name="vulnerabilityMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig.property.vulnerabilityMode"></a>

```java
public java.lang.String getVulnerabilityMode();
```

- *Type:* java.lang.String

Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Possible values: ["VULNERABILITY_DISABLED", "VULNERABILITY_ENTERPRISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#vulnerability_mode GoogleContainerAttachedCluster#vulnerability_mode}

---

### GoogleContainerAttachedClusterTimeouts <a name="GoogleContainerAttachedClusterTimeouts" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterTimeouts;

GoogleContainerAttachedClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#create GoogleContainerAttachedCluster#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#delete GoogleContainerAttachedCluster#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#update GoogleContainerAttachedCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#create GoogleContainerAttachedCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#delete GoogleContainerAttachedCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/resources/google_container_attached_cluster#update GoogleContainerAttachedCluster#update}.

---

### GoogleContainerAttachedClusterWorkloadIdentityConfig <a name="GoogleContainerAttachedClusterWorkloadIdentityConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterWorkloadIdentityConfig;

GoogleContainerAttachedClusterWorkloadIdentityConfig.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### GoogleContainerAttachedClusterAuthorizationOutputReference <a name="GoogleContainerAttachedClusterAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterAuthorizationOutputReference;

new GoogleContainerAttachedClusterAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups">resetAdminGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers">resetAdminUsers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdminGroups` <a name="resetAdminGroups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminGroups"></a>

```java
public void resetAdminGroups()
```

##### `resetAdminUsers` <a name="resetAdminUsers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.resetAdminUsers"></a>

```java
public void resetAdminUsers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput">adminGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput">adminUsersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroups">adminGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsers">adminUsers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminGroupsInput`<sup>Optional</sup> <a name="adminGroupsInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroupsInput"></a>

```java
public java.util.List<java.lang.String> getAdminGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminUsersInput`<sup>Optional</sup> <a name="adminUsersInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsersInput"></a>

```java
public java.util.List<java.lang.String> getAdminUsersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminGroups`<sup>Required</sup> <a name="adminGroups" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminGroups"></a>

```java
public java.util.List<java.lang.String> getAdminGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `adminUsers`<sup>Required</sup> <a name="adminUsers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.adminUsers"></a>

```java
public java.util.List<java.lang.String> getAdminUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorizationOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterAuthorization">GoogleContainerAttachedClusterAuthorization</a>

---


### GoogleContainerAttachedClusterBinaryAuthorizationOutputReference <a name="GoogleContainerAttachedClusterBinaryAuthorizationOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference;

new GoogleContainerAttachedClusterBinaryAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode">resetEvaluationMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEvaluationMode` <a name="resetEvaluationMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.resetEvaluationMode"></a>

```java
public void resetEvaluationMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput">evaluationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode">evaluationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `evaluationModeInput`<sup>Optional</sup> <a name="evaluationModeInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationModeInput"></a>

```java
public java.lang.String getEvaluationModeInput();
```

- *Type:* java.lang.String

---

##### `evaluationMode`<sup>Required</sup> <a name="evaluationMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.evaluationMode"></a>

```java
public java.lang.String getEvaluationMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorizationOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterBinaryAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterBinaryAuthorization">GoogleContainerAttachedClusterBinaryAuthorization</a>

---


### GoogleContainerAttachedClusterErrorsList <a name="GoogleContainerAttachedClusterErrorsList" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterErrorsList;

new GoogleContainerAttachedClusterErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.get"></a>

```java
public GoogleContainerAttachedClusterErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleContainerAttachedClusterErrorsOutputReference <a name="GoogleContainerAttachedClusterErrorsOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterErrorsOutputReference;

new GoogleContainerAttachedClusterErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors">GoogleContainerAttachedClusterErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrorsOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterErrors getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterErrors">GoogleContainerAttachedClusterErrors</a>

---


### GoogleContainerAttachedClusterFleetOutputReference <a name="GoogleContainerAttachedClusterFleetOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterFleetOutputReference;

new GoogleContainerAttachedClusterFleetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.membership">membership</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `membership`<sup>Required</sup> <a name="membership" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.membership"></a>

```java
public java.lang.String getMembership();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleetOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterFleet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterFleet">GoogleContainerAttachedClusterFleet</a>

---


### GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference <a name="GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference;

new GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents">resetEnableComponents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableComponents` <a name="resetEnableComponents" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.resetEnableComponents"></a>

```java
public void resetEnableComponents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput">enableComponentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents">enableComponents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableComponentsInput`<sup>Optional</sup> <a name="enableComponentsInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponentsInput"></a>

```java
public java.util.List<java.lang.String> getEnableComponentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableComponents`<sup>Required</sup> <a name="enableComponents" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.enableComponents"></a>

```java
public java.util.List<java.lang.String> getEnableComponents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterLoggingConfigComponentConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

---


### GoogleContainerAttachedClusterLoggingConfigOutputReference <a name="GoogleContainerAttachedClusterLoggingConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterLoggingConfigOutputReference;

new GoogleContainerAttachedClusterLoggingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig">putComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig">resetComponentConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putComponentConfig` <a name="putComponentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig"></a>

```java
public void putComponentConfig(GoogleContainerAttachedClusterLoggingConfigComponentConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.putComponentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `resetComponentConfig` <a name="resetComponentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.resetComponentConfig"></a>

```java
public void resetComponentConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig">componentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput">componentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentConfig`<sup>Required</sup> <a name="componentConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfig"></a>

```java
public GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference getComponentConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference">GoogleContainerAttachedClusterLoggingConfigComponentConfigOutputReference</a>

---

##### `componentConfigInput`<sup>Optional</sup> <a name="componentConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.componentConfigInput"></a>

```java
public GoogleContainerAttachedClusterLoggingConfigComponentConfig getComponentConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigComponentConfig">GoogleContainerAttachedClusterLoggingConfigComponentConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterLoggingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterLoggingConfig">GoogleContainerAttachedClusterLoggingConfig</a>

---


### GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference <a name="GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference;

new GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---


### GoogleContainerAttachedClusterMonitoringConfigOutputReference <a name="GoogleContainerAttachedClusterMonitoringConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference;

new GoogleContainerAttachedClusterMonitoringConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig">putManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig">resetManagedPrometheusConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedPrometheusConfig` <a name="putManagedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig"></a>

```java
public void putManagedPrometheusConfig(GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.putManagedPrometheusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `resetManagedPrometheusConfig` <a name="resetManagedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.resetManagedPrometheusConfig"></a>

```java
public void resetManagedPrometheusConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig">managedPrometheusConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput">managedPrometheusConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managedPrometheusConfig`<sup>Required</sup> <a name="managedPrometheusConfig" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfig"></a>

```java
public GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference getManagedPrometheusConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference</a>

---

##### `managedPrometheusConfigInput`<sup>Optional</sup> <a name="managedPrometheusConfigInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.managedPrometheusConfigInput"></a>

```java
public GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig getManagedPrometheusConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig">GoogleContainerAttachedClusterMonitoringConfigManagedPrometheusConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterMonitoringConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterMonitoringConfig">GoogleContainerAttachedClusterMonitoringConfig</a>

---


### GoogleContainerAttachedClusterOidcConfigOutputReference <a name="GoogleContainerAttachedClusterOidcConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterOidcConfigOutputReference;

new GoogleContainerAttachedClusterOidcConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resetJwks">resetJwks</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetJwks` <a name="resetJwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.resetJwks"></a>

```java
public void resetJwks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput">issuerUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwksInput">jwksInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwks">jwks</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrlInput"></a>

```java
public java.lang.String getIssuerUrlInput();
```

- *Type:* java.lang.String

---

##### `jwksInput`<sup>Optional</sup> <a name="jwksInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwksInput"></a>

```java
public java.lang.String getJwksInput();
```

- *Type:* java.lang.String

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.issuerUrl"></a>

```java
public java.lang.String getIssuerUrl();
```

- *Type:* java.lang.String

---

##### `jwks`<sup>Required</sup> <a name="jwks" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.jwks"></a>

```java
public java.lang.String getJwks();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterOidcConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterOidcConfig">GoogleContainerAttachedClusterOidcConfig</a>

---


### GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference <a name="GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference;

new GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterProxyConfigKubernetesSecret getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

---


### GoogleContainerAttachedClusterProxyConfigOutputReference <a name="GoogleContainerAttachedClusterProxyConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterProxyConfigOutputReference;

new GoogleContainerAttachedClusterProxyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret">putKubernetesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret">resetKubernetesSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKubernetesSecret` <a name="putKubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret"></a>

```java
public void putKubernetesSecret(GoogleContainerAttachedClusterProxyConfigKubernetesSecret value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.putKubernetesSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

---

##### `resetKubernetesSecret` <a name="resetKubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.resetKubernetesSecret"></a>

```java
public void resetKubernetesSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret">kubernetesSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput">kubernetesSecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kubernetesSecret`<sup>Required</sup> <a name="kubernetesSecret" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecret"></a>

```java
public GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference getKubernetesSecret();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference">GoogleContainerAttachedClusterProxyConfigKubernetesSecretOutputReference</a>

---

##### `kubernetesSecretInput`<sup>Optional</sup> <a name="kubernetesSecretInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.kubernetesSecretInput"></a>

```java
public GoogleContainerAttachedClusterProxyConfigKubernetesSecret getKubernetesSecretInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigKubernetesSecret">GoogleContainerAttachedClusterProxyConfigKubernetesSecret</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterProxyConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterProxyConfig">GoogleContainerAttachedClusterProxyConfig</a>

---


### GoogleContainerAttachedClusterSecurityPostureConfigOutputReference <a name="GoogleContainerAttachedClusterSecurityPostureConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference;

new GoogleContainerAttachedClusterSecurityPostureConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput">vulnerabilityModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode">vulnerabilityMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `vulnerabilityModeInput`<sup>Optional</sup> <a name="vulnerabilityModeInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityModeInput"></a>

```java
public java.lang.String getVulnerabilityModeInput();
```

- *Type:* java.lang.String

---

##### `vulnerabilityMode`<sup>Required</sup> <a name="vulnerabilityMode" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.vulnerabilityMode"></a>

```java
public java.lang.String getVulnerabilityMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterSecurityPostureConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterSecurityPostureConfig">GoogleContainerAttachedClusterSecurityPostureConfig</a>

---


### GoogleContainerAttachedClusterTimeoutsOutputReference <a name="GoogleContainerAttachedClusterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterTimeoutsOutputReference;

new GoogleContainerAttachedClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterTimeouts">GoogleContainerAttachedClusterTimeouts</a>

---


### GoogleContainerAttachedClusterWorkloadIdentityConfigList <a name="GoogleContainerAttachedClusterWorkloadIdentityConfigList" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList;

new GoogleContainerAttachedClusterWorkloadIdentityConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.get"></a>

```java
public GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference <a name="GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_container_attached_cluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference;

new GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider">identityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri">issuerUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool">workloadPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig">GoogleContainerAttachedClusterWorkloadIdentityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identityProvider`<sup>Required</sup> <a name="identityProvider" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.identityProvider"></a>

```java
public java.lang.String getIdentityProvider();
```

- *Type:* java.lang.String

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.issuerUri"></a>

```java
public java.lang.String getIssuerUri();
```

- *Type:* java.lang.String

---

##### `workloadPool`<sup>Required</sup> <a name="workloadPool" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.workloadPool"></a>

```java
public java.lang.String getWorkloadPool();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfigOutputReference.property.internalValue"></a>

```java
public GoogleContainerAttachedClusterWorkloadIdentityConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleContainerAttachedCluster.GoogleContainerAttachedClusterWorkloadIdentityConfig">GoogleContainerAttachedClusterWorkloadIdentityConfig</a>

---



