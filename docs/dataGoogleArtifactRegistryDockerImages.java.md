# `dataGoogleArtifactRegistryDockerImages` Submodule <a name="`dataGoogleArtifactRegistryDockerImages` Submodule" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleArtifactRegistryDockerImages <a name="DataGoogleArtifactRegistryDockerImages" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images google_artifact_registry_docker_images}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_artifact_registry_docker_images.DataGoogleArtifactRegistryDockerImages;

DataGoogleArtifactRegistryDockerImages.Builder.create(Construct scope, java.lang.String id)
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
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.repositoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImages resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_artifact_registry_docker_images.DataGoogleArtifactRegistryDockerImages;

DataGoogleArtifactRegistryDockerImages.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_artifact_registry_docker_images.DataGoogleArtifactRegistryDockerImages;

DataGoogleArtifactRegistryDockerImages.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_artifact_registry_docker_images.DataGoogleArtifactRegistryDockerImages;

DataGoogleArtifactRegistryDockerImages.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_artifact_registry_docker_images.DataGoogleArtifactRegistryDockerImages;

DataGoogleArtifactRegistryDockerImages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleArtifactRegistryDockerImages.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleArtifactRegistryDockerImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleArtifactRegistryDockerImages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleArtifactRegistryDockerImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleArtifactRegistryDockerImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dockerImages">dockerImages</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList">DataGoogleArtifactRegistryDockerImagesDockerImagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryIdInput">repositoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dockerImages`<sup>Required</sup> <a name="dockerImages" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.dockerImages"></a>

```java
public DataGoogleArtifactRegistryDockerImagesDockerImagesList getDockerImages();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList">DataGoogleArtifactRegistryDockerImagesDockerImagesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `repositoryIdInput`<sup>Optional</sup> <a name="repositoryIdInput" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryIdInput"></a>

```java
public java.lang.String getRepositoryIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImages.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleArtifactRegistryDockerImagesConfig <a name="DataGoogleArtifactRegistryDockerImagesConfig" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_artifact_registry_docker_images.DataGoogleArtifactRegistryDockerImagesConfig;

DataGoogleArtifactRegistryDockerImagesConfig.builder()
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
    .location(java.lang.String)
    .repositoryId(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.repositoryId">repositoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#location DataGoogleArtifactRegistryDockerImages#location}.

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.repositoryId"></a>

```java
public java.lang.String getRepositoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#repository_id DataGoogleArtifactRegistryDockerImages#repository_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#id DataGoogleArtifactRegistryDockerImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/data-sources/google_artifact_registry_docker_images#project DataGoogleArtifactRegistryDockerImages#project}.

---

### DataGoogleArtifactRegistryDockerImagesDockerImages <a name="DataGoogleArtifactRegistryDockerImagesDockerImages" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_artifact_registry_docker_images.DataGoogleArtifactRegistryDockerImagesDockerImages;

DataGoogleArtifactRegistryDockerImagesDockerImages.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleArtifactRegistryDockerImagesDockerImagesList <a name="DataGoogleArtifactRegistryDockerImagesDockerImagesList" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_artifact_registry_docker_images.DataGoogleArtifactRegistryDockerImagesDockerImagesList;

new DataGoogleArtifactRegistryDockerImagesDockerImagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.get"></a>

```java
public DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference <a name="DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_artifact_registry_docker_images.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference;

new DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.buildTime">buildTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageName">imageName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageSizeBytes">imageSizeBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.mediaType">mediaType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.uploadTime">uploadTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages">DataGoogleArtifactRegistryDockerImagesDockerImages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `buildTime`<sup>Required</sup> <a name="buildTime" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.buildTime"></a>

```java
public java.lang.String getBuildTime();
```

- *Type:* java.lang.String

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageName"></a>

```java
public java.lang.String getImageName();
```

- *Type:* java.lang.String

---

##### `imageSizeBytes`<sup>Required</sup> <a name="imageSizeBytes" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.imageSizeBytes"></a>

```java
public java.lang.String getImageSizeBytes();
```

- *Type:* java.lang.String

---

##### `mediaType`<sup>Required</sup> <a name="mediaType" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.mediaType"></a>

```java
public java.lang.String getMediaType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `uploadTime`<sup>Required</sup> <a name="uploadTime" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.uploadTime"></a>

```java
public java.lang.String getUploadTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImagesOutputReference.property.internalValue"></a>

```java
public DataGoogleArtifactRegistryDockerImagesDockerImages getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleArtifactRegistryDockerImages.DataGoogleArtifactRegistryDockerImagesDockerImages">DataGoogleArtifactRegistryDockerImagesDockerImages</a>

---



