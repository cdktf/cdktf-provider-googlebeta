# `dataGoogleCloudRunService` Submodule <a name="`dataGoogleCloudRunService` Submodule" id="@cdktf/provider-google-beta.dataGoogleCloudRunService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudRunService <a name="DataGoogleCloudRunService" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service google_cloud_run_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunService;

DataGoogleCloudRunService.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name must be unique within a Google Cloud project and region. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#id DataGoogleCloudRunService#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#project DataGoogleCloudRunService#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#location DataGoogleCloudRunService#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name must be unique within a Google Cloud project and region.

Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#name DataGoogleCloudRunService#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#id DataGoogleCloudRunService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#project DataGoogleCloudRunService#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudRunService resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunService;

DataGoogleCloudRunService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunService;

DataGoogleCloudRunService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunService;

DataGoogleCloudRunService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunService;

DataGoogleCloudRunService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCloudRunService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleCloudRunService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCloudRunService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCloudRunService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudRunService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.autogenerateRevisionName">autogenerateRevisionName</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList">DataGoogleCloudRunServiceMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList">DataGoogleCloudRunServiceStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.template">template</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList">DataGoogleCloudRunServiceTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList">DataGoogleCloudRunServiceTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `autogenerateRevisionName`<sup>Required</sup> <a name="autogenerateRevisionName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.autogenerateRevisionName"></a>

```java
public IResolvable getAutogenerateRevisionName();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.metadata"></a>

```java
public DataGoogleCloudRunServiceMetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList">DataGoogleCloudRunServiceMetadataList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.status"></a>

```java
public DataGoogleCloudRunServiceStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList">DataGoogleCloudRunServiceStatusList</a>

---

##### `template`<sup>Required</sup> <a name="template" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.template"></a>

```java
public DataGoogleCloudRunServiceTemplateList getTemplate();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList">DataGoogleCloudRunServiceTemplateList</a>

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.traffic"></a>

```java
public DataGoogleCloudRunServiceTrafficList getTraffic();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList">DataGoogleCloudRunServiceTrafficList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudRunServiceConfig <a name="DataGoogleCloudRunServiceConfig" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceConfig;

DataGoogleCloudRunServiceConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the cloud run instance. eg us-central1. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name must be unique within a Google Cloud project and region. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#id DataGoogleCloudRunService#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#project DataGoogleCloudRunService#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the cloud run instance. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#location DataGoogleCloudRunService#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name must be unique within a Google Cloud project and region.

Is required when creating resources. Name is primarily intended
for creation idempotence and configuration definition. Cannot be updated.
More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#name DataGoogleCloudRunService#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#id DataGoogleCloudRunService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/data-sources/google_cloud_run_service#project DataGoogleCloudRunService#project}.

---

### DataGoogleCloudRunServiceMetadata <a name="DataGoogleCloudRunServiceMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceMetadata;

DataGoogleCloudRunServiceMetadata.builder()
    .build();
```


### DataGoogleCloudRunServiceStatus <a name="DataGoogleCloudRunServiceStatus" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceStatus;

DataGoogleCloudRunServiceStatus.builder()
    .build();
```


### DataGoogleCloudRunServiceStatusConditions <a name="DataGoogleCloudRunServiceStatusConditions" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceStatusConditions;

DataGoogleCloudRunServiceStatusConditions.builder()
    .build();
```


### DataGoogleCloudRunServiceStatusTraffic <a name="DataGoogleCloudRunServiceStatusTraffic" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTraffic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceStatusTraffic;

DataGoogleCloudRunServiceStatusTraffic.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplate <a name="DataGoogleCloudRunServiceTemplate" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplate;

DataGoogleCloudRunServiceTemplate.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateMetadata <a name="DataGoogleCloudRunServiceTemplateMetadata" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateMetadata;

DataGoogleCloudRunServiceTemplateMetadata.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpec <a name="DataGoogleCloudRunServiceTemplateSpec" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpec;

DataGoogleCloudRunServiceTemplateSpec.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainers <a name="DataGoogleCloudRunServiceTemplateSpecContainers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainers;

DataGoogleCloudRunServiceTemplateSpecContainers.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnv <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnv" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnv;

DataGoogleCloudRunServiceTemplateSpecContainersEnv.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom;

DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef;

DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference;

DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef;

DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference;

DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom;

DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef;

DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe;

DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc;

DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet;

DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders;

DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersPorts <a name="DataGoogleCloudRunServiceTemplateSpecContainersPorts" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersPorts;

DataGoogleCloudRunServiceTemplateSpecContainersPorts.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersResources <a name="DataGoogleCloudRunServiceTemplateSpecContainersResources" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersResources;

DataGoogleCloudRunServiceTemplateSpecContainersResources.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe;

DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc;

DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet;

DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders;

DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket;

DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts <a name="DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts;

DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecVolumes <a name="DataGoogleCloudRunServiceTemplateSpecVolumes" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumes;

DataGoogleCloudRunServiceTemplateSpecVolumes.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecVolumesCsi <a name="DataGoogleCloudRunServiceTemplateSpecVolumesCsi" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesCsi;

DataGoogleCloudRunServiceTemplateSpecVolumesCsi.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir <a name="DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir;

DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecVolumesNfs <a name="DataGoogleCloudRunServiceTemplateSpecVolumesNfs" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesNfs;

DataGoogleCloudRunServiceTemplateSpecVolumesNfs.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecVolumesSecret <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecret" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesSecret;

DataGoogleCloudRunServiceTemplateSpecVolumesSecret.builder()
    .build();
```


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems;

DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems.builder()
    .build();
```


### DataGoogleCloudRunServiceTraffic <a name="DataGoogleCloudRunServiceTraffic" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTraffic;

DataGoogleCloudRunServiceTraffic.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudRunServiceMetadataList <a name="DataGoogleCloudRunServiceMetadataList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceMetadataList;

new DataGoogleCloudRunServiceMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.get"></a>

```java
public DataGoogleCloudRunServiceMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceMetadataOutputReference <a name="DataGoogleCloudRunServiceMetadataOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceMetadataOutputReference;

new DataGoogleCloudRunServiceMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.annotations">annotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata">DataGoogleCloudRunServiceMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadataOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceMetadata">DataGoogleCloudRunServiceMetadata</a>

---


### DataGoogleCloudRunServiceStatusConditionsList <a name="DataGoogleCloudRunServiceStatusConditionsList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceStatusConditionsList;

new DataGoogleCloudRunServiceStatusConditionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.get"></a>

```java
public DataGoogleCloudRunServiceStatusConditionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceStatusConditionsOutputReference <a name="DataGoogleCloudRunServiceStatusConditionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceStatusConditionsOutputReference;

new DataGoogleCloudRunServiceStatusConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.reason">reason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions">DataGoogleCloudRunServiceStatusConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.reason"></a>

```java
public java.lang.String getReason();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceStatusConditions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditions">DataGoogleCloudRunServiceStatusConditions</a>

---


### DataGoogleCloudRunServiceStatusList <a name="DataGoogleCloudRunServiceStatusList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceStatusList;

new DataGoogleCloudRunServiceStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.get"></a>

```java
public DataGoogleCloudRunServiceStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceStatusOutputReference <a name="DataGoogleCloudRunServiceStatusOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceStatusOutputReference;

new DataGoogleCloudRunServiceStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList">DataGoogleCloudRunServiceStatusConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestCreatedRevisionName">latestCreatedRevisionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestReadyRevisionName">latestReadyRevisionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.observedGeneration">observedGeneration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.traffic">traffic</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList">DataGoogleCloudRunServiceStatusTrafficList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus">DataGoogleCloudRunServiceStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.conditions"></a>

```java
public DataGoogleCloudRunServiceStatusConditionsList getConditions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusConditionsList">DataGoogleCloudRunServiceStatusConditionsList</a>

---

##### `latestCreatedRevisionName`<sup>Required</sup> <a name="latestCreatedRevisionName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestCreatedRevisionName"></a>

```java
public java.lang.String getLatestCreatedRevisionName();
```

- *Type:* java.lang.String

---

##### `latestReadyRevisionName`<sup>Required</sup> <a name="latestReadyRevisionName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.latestReadyRevisionName"></a>

```java
public java.lang.String getLatestReadyRevisionName();
```

- *Type:* java.lang.String

---

##### `observedGeneration`<sup>Required</sup> <a name="observedGeneration" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.observedGeneration"></a>

```java
public java.lang.Number getObservedGeneration();
```

- *Type:* java.lang.Number

---

##### `traffic`<sup>Required</sup> <a name="traffic" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.traffic"></a>

```java
public DataGoogleCloudRunServiceStatusTrafficList getTraffic();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList">DataGoogleCloudRunServiceStatusTrafficList</a>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatus">DataGoogleCloudRunServiceStatus</a>

---


### DataGoogleCloudRunServiceStatusTrafficList <a name="DataGoogleCloudRunServiceStatusTrafficList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceStatusTrafficList;

new DataGoogleCloudRunServiceStatusTrafficList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.get"></a>

```java
public DataGoogleCloudRunServiceStatusTrafficOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceStatusTrafficOutputReference <a name="DataGoogleCloudRunServiceStatusTrafficOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceStatusTrafficOutputReference;

new DataGoogleCloudRunServiceStatusTrafficOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.latestRevision">latestRevision</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.revisionName">revisionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTraffic">DataGoogleCloudRunServiceStatusTraffic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.latestRevision"></a>

```java
public IResolvable getLatestRevision();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `revisionName`<sup>Required</sup> <a name="revisionName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.revisionName"></a>

```java
public java.lang.String getRevisionName();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTrafficOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceStatusTraffic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceStatusTraffic">DataGoogleCloudRunServiceStatusTraffic</a>

---


### DataGoogleCloudRunServiceTemplateList <a name="DataGoogleCloudRunServiceTemplateList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateList;

new DataGoogleCloudRunServiceTemplateList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateMetadataList <a name="DataGoogleCloudRunServiceTemplateMetadataList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateMetadataList;

new DataGoogleCloudRunServiceTemplateMetadataList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateMetadataOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateMetadataOutputReference <a name="DataGoogleCloudRunServiceTemplateMetadataOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateMetadataOutputReference;

new DataGoogleCloudRunServiceTemplateMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.annotations">annotations</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata">DataGoogleCloudRunServiceTemplateMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.annotations"></a>

```java
public StringMap getAnnotations();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadata">DataGoogleCloudRunServiceTemplateMetadata</a>

---


### DataGoogleCloudRunServiceTemplateOutputReference <a name="DataGoogleCloudRunServiceTemplateOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateOutputReference;

new DataGoogleCloudRunServiceTemplateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList">DataGoogleCloudRunServiceTemplateMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList">DataGoogleCloudRunServiceTemplateSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate">DataGoogleCloudRunServiceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.metadata"></a>

```java
public DataGoogleCloudRunServiceTemplateMetadataList getMetadata();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateMetadataList">DataGoogleCloudRunServiceTemplateMetadataList</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.spec"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecList getSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList">DataGoogleCloudRunServiceTemplateSpecList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplate getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplate">DataGoogleCloudRunServiceTemplate</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReference</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference">localObjectReference</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional">optional</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localObjectReference`<sup>Required</sup> <a name="localObjectReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.localObjectReference"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList getLocalObjectReference();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefLocalObjectReferenceList</a>

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.optional"></a>

```java
public IResolvable getOptional();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRef</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef">configMapRef</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configMapRef`<sup>Required</sup> <a name="configMapRef" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.configMapRef"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList getConfigMapRef();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromConfigMapRefList</a>

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.secretRef"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvFrom</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReference</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference">localObjectReference</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional">optional</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `localObjectReference`<sup>Required</sup> <a name="localObjectReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.localObjectReference"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList getLocalObjectReference();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefLocalObjectReferenceList</a>

---

##### `optional`<sup>Required</sup> <a name="optional" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.optional"></a>

```java
public IResolvable getOptional();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRefOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromSecretRef</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvList;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv">DataGoogleCloudRunServiceTemplateSpecContainersEnv</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.valueFrom"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList getValueFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnv getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnv">DataGoogleCloudRunServiceTemplateSpecContainersEnv</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.secretKeyRef"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList getSecretKeyRef();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFrom</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef">DataGoogleCloudRunServiceTemplateSpecContainersEnvValueFromSecretKeyRef</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersList <a name="DataGoogleCloudRunServiceTemplateSpecContainersList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersList;

new DataGoogleCloudRunServiceTemplateSpecContainersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList;

new DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpc</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList;

new DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeaders</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList;

new DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList getHttpHeaders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetHttpHeadersList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGet</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList;

new DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.grpc"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList getGrpc();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeGrpcList</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.httpGet"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList getHttpGet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeHttpGetList</a>

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbe</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.args">args</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.command">command</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.env">env</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList">DataGoogleCloudRunServiceTemplateSpecContainersEnvList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFrom">envFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbe">livenessProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList">DataGoogleCloudRunServiceTemplateSpecContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList">DataGoogleCloudRunServiceTemplateSpecContainersResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.startupProbe">startupProbe</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts">volumeMounts</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDir">workingDir</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers">DataGoogleCloudRunServiceTemplateSpecContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.args"></a>

```java
public java.util.List<java.lang.String> getArgs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.command"></a>

```java
public java.util.List<java.lang.String> getCommand();
```

- *Type:* java.util.List<java.lang.String>

---

##### `env`<sup>Required</sup> <a name="env" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.env"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvList getEnv();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvList">DataGoogleCloudRunServiceTemplateSpecContainersEnvList</a>

---

##### `envFrom`<sup>Required</sup> <a name="envFrom" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.envFrom"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList getEnvFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList">DataGoogleCloudRunServiceTemplateSpecContainersEnvFromList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `livenessProbe`<sup>Required</sup> <a name="livenessProbe" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.livenessProbe"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList getLivenessProbe();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList">DataGoogleCloudRunServiceTemplateSpecContainersLivenessProbeList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.ports"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersPortsList getPorts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList">DataGoogleCloudRunServiceTemplateSpecContainersPortsList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.resources"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersResourcesList getResources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList">DataGoogleCloudRunServiceTemplateSpecContainersResourcesList</a>

---

##### `startupProbe`<sup>Required</sup> <a name="startupProbe" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.startupProbe"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList getStartupProbe();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList</a>

---

##### `volumeMounts`<sup>Required</sup> <a name="volumeMounts" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.volumeMounts"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList getVolumeMounts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList</a>

---

##### `workingDir`<sup>Required</sup> <a name="workingDir" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.workingDir"></a>

```java
public java.lang.String getWorkingDir();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainers getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainers">DataGoogleCloudRunServiceTemplateSpecContainers</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersPortsList <a name="DataGoogleCloudRunServiceTemplateSpecContainersPortsList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersPortsList;

new DataGoogleCloudRunServiceTemplateSpecContainersPortsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts">DataGoogleCloudRunServiceTemplateSpecContainersPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPortsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersPorts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersPorts">DataGoogleCloudRunServiceTemplateSpecContainersPorts</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersResourcesList <a name="DataGoogleCloudRunServiceTemplateSpecContainersResourcesList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList;

new DataGoogleCloudRunServiceTemplateSpecContainersResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits">limits</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests">requests</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources">DataGoogleCloudRunServiceTemplateSpecContainersResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `limits`<sup>Required</sup> <a name="limits" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.limits"></a>

```java
public StringMap getLimits();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.requests"></a>

```java
public StringMap getRequests();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResourcesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersResources getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersResources">DataGoogleCloudRunServiceTemplateSpecContainersResources</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpc</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeaders</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeaders">httpHeaders</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.httpHeaders"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList getHttpHeaders();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetHttpHeadersList</a>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGet</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpc">grpc</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGet">httpGet</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySeconds">initialDelaySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocket">tcpSocket</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `grpc`<sup>Required</sup> <a name="grpc" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.grpc"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList getGrpc();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeGrpcList</a>

---

##### `httpGet`<sup>Required</sup> <a name="httpGet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.httpGet"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList getHttpGet();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeHttpGetList</a>

---

##### `initialDelaySeconds`<sup>Required</sup> <a name="initialDelaySeconds" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.initialDelaySeconds"></a>

```java
public java.lang.Number getInitialDelaySeconds();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `tcpSocket`<sup>Required</sup> <a name="tcpSocket" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.tcpSocket"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList getTcpSocket();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList</a>

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbe</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocketOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket">DataGoogleCloudRunServiceTemplateSpecContainersStartupProbeTcpSocket</a>

---


### DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList <a name="DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList;

new DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference;

new DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath">mountPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.mountPath"></a>

```java
public java.lang.String getMountPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMountsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts">DataGoogleCloudRunServiceTemplateSpecContainersVolumeMounts</a>

---


### DataGoogleCloudRunServiceTemplateSpecList <a name="DataGoogleCloudRunServiceTemplateSpecList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecList;

new DataGoogleCloudRunServiceTemplateSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecOutputReference;

new DataGoogleCloudRunServiceTemplateSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrency">containerConcurrency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList">DataGoogleCloudRunServiceTemplateSpecContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.nodeSelector">nodeSelector</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountName">serviceAccountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.servingState">servingState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList">DataGoogleCloudRunServiceTemplateSpecVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec">DataGoogleCloudRunServiceTemplateSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerConcurrency`<sup>Required</sup> <a name="containerConcurrency" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containerConcurrency"></a>

```java
public java.lang.Number getContainerConcurrency();
```

- *Type:* java.lang.Number

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.containers"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecContainersList getContainers();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecContainersList">DataGoogleCloudRunServiceTemplateSpecContainersList</a>

---

##### `nodeSelector`<sup>Required</sup> <a name="nodeSelector" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.nodeSelector"></a>

```java
public StringMap getNodeSelector();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `serviceAccountName`<sup>Required</sup> <a name="serviceAccountName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.serviceAccountName"></a>

```java
public java.lang.String getServiceAccountName();
```

- *Type:* java.lang.String

---

##### `servingState`<sup>Required</sup> <a name="servingState" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.servingState"></a>

```java
public java.lang.String getServingState();
```

- *Type:* java.lang.String

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.volumes"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesList getVolumes();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList">DataGoogleCloudRunServiceTemplateSpecVolumesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpec">DataGoogleCloudRunServiceTemplateSpec</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesCsiList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesCsiList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList;

new DataGoogleCloudRunServiceTemplateSpecVolumesCsiList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference;

new DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.driver">driver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.readOnly">readOnly</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.volumeAttributes">volumeAttributes</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsi">DataGoogleCloudRunServiceTemplateSpecVolumesCsi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.readOnly"></a>

```java
public IResolvable getReadOnly();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `volumeAttributes`<sup>Required</sup> <a name="volumeAttributes" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.volumeAttributes"></a>

```java
public StringMap getVolumeAttributes();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesCsi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsi">DataGoogleCloudRunServiceTemplateSpecVolumesCsi</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList;

new DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference;

new DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.medium">medium</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.sizeLimit">sizeLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir">DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `medium`<sup>Required</sup> <a name="medium" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.medium"></a>

```java
public java.lang.String getMedium();
```

- *Type:* java.lang.String

---

##### `sizeLimit`<sup>Required</sup> <a name="sizeLimit" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.sizeLimit"></a>

```java
public java.lang.String getSizeLimit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir">DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDir</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesList;

new DataGoogleCloudRunServiceTemplateSpecVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecVolumesNfsList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesNfsList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList;

new DataGoogleCloudRunServiceTemplateSpecVolumesNfsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference;

new DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.readOnly">readOnly</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfs">DataGoogleCloudRunServiceTemplateSpecVolumesNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.readOnly"></a>

```java
public IResolvable getReadOnly();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesNfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfs">DataGoogleCloudRunServiceTemplateSpecVolumesNfs</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference;

new DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList">DataGoogleCloudRunServiceTemplateSpecVolumesCsiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.emptyDir">emptyDir</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList">DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList">DataGoogleCloudRunServiceTemplateSpecVolumesNfsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secret">secret</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes">DataGoogleCloudRunServiceTemplateSpecVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `csi`<sup>Required</sup> <a name="csi" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.csi"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesCsiList getCsi();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesCsiList">DataGoogleCloudRunServiceTemplateSpecVolumesCsiList</a>

---

##### `emptyDir`<sup>Required</sup> <a name="emptyDir" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.emptyDir"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList getEmptyDir();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList">DataGoogleCloudRunServiceTemplateSpecVolumesEmptyDirList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.nfs"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesNfsList getNfs();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesNfsList">DataGoogleCloudRunServiceTemplateSpecVolumesNfsList</a>

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.secret"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesSecretList getSecret();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumes">DataGoogleCloudRunServiceTemplateSpecVolumes</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList;

new DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference;

new DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode">mode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.mode"></a>

```java
public java.lang.Number getMode();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItems</a>

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretList <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList;

new DataGoogleCloudRunServiceTemplateSpecVolumesSecretList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.get"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference <a name="DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference;

new DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode">defaultMode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items">items</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret">DataGoogleCloudRunServiceTemplateSpecVolumesSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultMode`<sup>Required</sup> <a name="defaultMode" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.defaultMode"></a>

```java
public java.lang.Number getDefaultMode();
```

- *Type:* java.lang.Number

---

##### `items`<sup>Required</sup> <a name="items" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.items"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList getItems();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList">DataGoogleCloudRunServiceTemplateSpecVolumesSecretItemsList</a>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecretOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTemplateSpecVolumesSecret getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTemplateSpecVolumesSecret">DataGoogleCloudRunServiceTemplateSpecVolumesSecret</a>

---


### DataGoogleCloudRunServiceTrafficList <a name="DataGoogleCloudRunServiceTrafficList" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTrafficList;

new DataGoogleCloudRunServiceTrafficList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.get"></a>

```java
public DataGoogleCloudRunServiceTrafficOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCloudRunServiceTrafficOutputReference <a name="DataGoogleCloudRunServiceTrafficOutputReference" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_cloud_run_service.DataGoogleCloudRunServiceTrafficOutputReference;

new DataGoogleCloudRunServiceTrafficOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.latestRevision">latestRevision</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.percent">percent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.revisionName">revisionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.tag">tag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic">DataGoogleCloudRunServiceTraffic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latestRevision`<sup>Required</sup> <a name="latestRevision" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.latestRevision"></a>

```java
public IResolvable getLatestRevision();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.percent"></a>

```java
public java.lang.Number getPercent();
```

- *Type:* java.lang.Number

---

##### `revisionName`<sup>Required</sup> <a name="revisionName" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.revisionName"></a>

```java
public java.lang.String getRevisionName();
```

- *Type:* java.lang.String

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.tag"></a>

```java
public java.lang.String getTag();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTrafficOutputReference.property.internalValue"></a>

```java
public DataGoogleCloudRunServiceTraffic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleCloudRunService.DataGoogleCloudRunServiceTraffic">DataGoogleCloudRunServiceTraffic</a>

---



