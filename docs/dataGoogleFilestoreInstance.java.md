# `dataGoogleFilestoreInstance` Submodule <a name="`dataGoogleFilestoreInstance` Submodule" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleFilestoreInstance <a name="DataGoogleFilestoreInstance" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance google_filestore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstance;

DataGoogleFilestoreInstance.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#id DataGoogleFilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#project DataGoogleFilestoreInstance#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#name DataGoogleFilestoreInstance#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#id DataGoogleFilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#location DataGoogleFilestoreInstance#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#project DataGoogleFilestoreInstance#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleFilestoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstance;

DataGoogleFilestoreInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstance;

DataGoogleFilestoreInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstance;

DataGoogleFilestoreInstance.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstance;

DataGoogleFilestoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleFilestoreInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleFilestoreInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleFilestoreInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleFilestoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleFilestoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.deletionProtectionReason">deletionProtectionReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.effectiveReplication">effectiveReplication</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList">DataGoogleFilestoreInstanceEffectiveReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.fileShares">fileShares</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList">DataGoogleFilestoreInstanceFileSharesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.initialReplication">initialReplication</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList">DataGoogleFilestoreInstanceInitialReplicationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.kmsKeyName">kmsKeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.networks">networks</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList">DataGoogleFilestoreInstanceNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.performanceConfig">performanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList">DataGoogleFilestoreInstancePerformanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tier">tier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.deletionProtectionEnabled"></a>

```java
public IResolvable getDeletionProtectionEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `deletionProtectionReason`<sup>Required</sup> <a name="deletionProtectionReason" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.deletionProtectionReason"></a>

```java
public java.lang.String getDeletionProtectionReason();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `effectiveReplication`<sup>Required</sup> <a name="effectiveReplication" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.effectiveReplication"></a>

```java
public DataGoogleFilestoreInstanceEffectiveReplicationList getEffectiveReplication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList">DataGoogleFilestoreInstanceEffectiveReplicationList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `fileShares`<sup>Required</sup> <a name="fileShares" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.fileShares"></a>

```java
public DataGoogleFilestoreInstanceFileSharesList getFileShares();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList">DataGoogleFilestoreInstanceFileSharesList</a>

---

##### `initialReplication`<sup>Required</sup> <a name="initialReplication" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.initialReplication"></a>

```java
public DataGoogleFilestoreInstanceInitialReplicationList getInitialReplication();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList">DataGoogleFilestoreInstanceInitialReplicationList</a>

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.kmsKeyName"></a>

```java
public java.lang.String getKmsKeyName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `networks`<sup>Required</sup> <a name="networks" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.networks"></a>

```java
public DataGoogleFilestoreInstanceNetworksList getNetworks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList">DataGoogleFilestoreInstanceNetworksList</a>

---

##### `performanceConfig`<sup>Required</sup> <a name="performanceConfig" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.performanceConfig"></a>

```java
public DataGoogleFilestoreInstancePerformanceConfigList getPerformanceConfig();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList">DataGoogleFilestoreInstancePerformanceConfigList</a>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tier"></a>

```java
public java.lang.String getTier();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleFilestoreInstanceConfig <a name="DataGoogleFilestoreInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceConfig;

DataGoogleFilestoreInstanceConfig.builder()
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
    .name(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#id DataGoogleFilestoreInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the location of the instance. This can be a region for ENTERPRISE tier instances. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#project DataGoogleFilestoreInstance#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#name DataGoogleFilestoreInstance#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#id DataGoogleFilestoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the location of the instance. This can be a region for ENTERPRISE tier instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#location DataGoogleFilestoreInstance#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.29.0/docs/data-sources/google_filestore_instance#project DataGoogleFilestoreInstance#project}.

---

### DataGoogleFilestoreInstanceEffectiveReplication <a name="DataGoogleFilestoreInstanceEffectiveReplication" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceEffectiveReplication;

DataGoogleFilestoreInstanceEffectiveReplication.builder()
    .build();
```


### DataGoogleFilestoreInstanceEffectiveReplicationReplicas <a name="DataGoogleFilestoreInstanceEffectiveReplicationReplicas" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceEffectiveReplicationReplicas;

DataGoogleFilestoreInstanceEffectiveReplicationReplicas.builder()
    .build();
```


### DataGoogleFilestoreInstanceFileShares <a name="DataGoogleFilestoreInstanceFileShares" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileShares"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileShares.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceFileShares;

DataGoogleFilestoreInstanceFileShares.builder()
    .build();
```


### DataGoogleFilestoreInstanceFileSharesNfsExportOptions <a name="DataGoogleFilestoreInstanceFileSharesNfsExportOptions" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions;

DataGoogleFilestoreInstanceFileSharesNfsExportOptions.builder()
    .build();
```


### DataGoogleFilestoreInstanceInitialReplication <a name="DataGoogleFilestoreInstanceInitialReplication" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplication.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceInitialReplication;

DataGoogleFilestoreInstanceInitialReplication.builder()
    .build();
```


### DataGoogleFilestoreInstanceInitialReplicationReplicas <a name="DataGoogleFilestoreInstanceInitialReplicationReplicas" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceInitialReplicationReplicas;

DataGoogleFilestoreInstanceInitialReplicationReplicas.builder()
    .build();
```


### DataGoogleFilestoreInstanceNetworks <a name="DataGoogleFilestoreInstanceNetworks" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceNetworks;

DataGoogleFilestoreInstanceNetworks.builder()
    .build();
```


### DataGoogleFilestoreInstancePerformanceConfig <a name="DataGoogleFilestoreInstancePerformanceConfig" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstancePerformanceConfig;

DataGoogleFilestoreInstancePerformanceConfig.builder()
    .build();
```


### DataGoogleFilestoreInstancePerformanceConfigFixedIops <a name="DataGoogleFilestoreInstancePerformanceConfigFixedIops" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIops"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIops.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstancePerformanceConfigFixedIops;

DataGoogleFilestoreInstancePerformanceConfigFixedIops.builder()
    .build();
```


### DataGoogleFilestoreInstancePerformanceConfigIopsPerTb <a name="DataGoogleFilestoreInstancePerformanceConfigIopsPerTb" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTb.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTb;

DataGoogleFilestoreInstancePerformanceConfigIopsPerTb.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleFilestoreInstanceEffectiveReplicationList <a name="DataGoogleFilestoreInstanceEffectiveReplicationList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceEffectiveReplicationList;

new DataGoogleFilestoreInstanceEffectiveReplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.get"></a>

```java
public DataGoogleFilestoreInstanceEffectiveReplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstanceEffectiveReplicationOutputReference <a name="DataGoogleFilestoreInstanceEffectiveReplicationOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference;

new DataGoogleFilestoreInstanceEffectiveReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList">DataGoogleFilestoreInstanceEffectiveReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplication">DataGoogleFilestoreInstanceEffectiveReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.property.replicas"></a>

```java
public DataGoogleFilestoreInstanceEffectiveReplicationReplicasList getReplicas();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList">DataGoogleFilestoreInstanceEffectiveReplicationReplicasList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstanceEffectiveReplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplication">DataGoogleFilestoreInstanceEffectiveReplication</a>

---


### DataGoogleFilestoreInstanceEffectiveReplicationReplicasList <a name="DataGoogleFilestoreInstanceEffectiveReplicationReplicasList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList;

new DataGoogleFilestoreInstanceEffectiveReplicationReplicasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.get"></a>

```java
public DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference <a name="DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference;

new DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime">lastActiveSyncTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons">stateReasons</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicas">DataGoogleFilestoreInstanceEffectiveReplicationReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lastActiveSyncTime`<sup>Required</sup> <a name="lastActiveSyncTime" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.lastActiveSyncTime"></a>

```java
public java.lang.String getLastActiveSyncTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateReasons`<sup>Required</sup> <a name="stateReasons" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.stateReasons"></a>

```java
public java.util.List<java.lang.String> getStateReasons();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicasOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstanceEffectiveReplicationReplicas getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceEffectiveReplicationReplicas">DataGoogleFilestoreInstanceEffectiveReplicationReplicas</a>

---


### DataGoogleFilestoreInstanceFileSharesList <a name="DataGoogleFilestoreInstanceFileSharesList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceFileSharesList;

new DataGoogleFilestoreInstanceFileSharesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.get"></a>

```java
public DataGoogleFilestoreInstanceFileSharesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList <a name="DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList;

new DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.get"></a>

```java
public DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference <a name="DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference;

new DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid">anonGid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid">anonUid</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges">ipRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode">squashMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions">DataGoogleFilestoreInstanceFileSharesNfsExportOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `anonGid`<sup>Required</sup> <a name="anonGid" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonGid"></a>

```java
public java.lang.Number getAnonGid();
```

- *Type:* java.lang.Number

---

##### `anonUid`<sup>Required</sup> <a name="anonUid" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.anonUid"></a>

```java
public java.lang.Number getAnonUid();
```

- *Type:* java.lang.Number

---

##### `ipRanges`<sup>Required</sup> <a name="ipRanges" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.ipRanges"></a>

```java
public java.util.List<java.lang.String> getIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `squashMode`<sup>Required</sup> <a name="squashMode" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.squashMode"></a>

```java
public java.lang.String getSquashMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstanceFileSharesNfsExportOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptions">DataGoogleFilestoreInstanceFileSharesNfsExportOptions</a>

---


### DataGoogleFilestoreInstanceFileSharesOutputReference <a name="DataGoogleFilestoreInstanceFileSharesOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceFileSharesOutputReference;

new DataGoogleFilestoreInstanceFileSharesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.capacityGb">capacityGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptions">nfsExportOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList">DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackup">sourceBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileShares">DataGoogleFilestoreInstanceFileShares</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `capacityGb`<sup>Required</sup> <a name="capacityGb" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.capacityGb"></a>

```java
public java.lang.Number getCapacityGb();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nfsExportOptions`<sup>Required</sup> <a name="nfsExportOptions" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.nfsExportOptions"></a>

```java
public DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList getNfsExportOptions();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList">DataGoogleFilestoreInstanceFileSharesNfsExportOptionsList</a>

---

##### `sourceBackup`<sup>Required</sup> <a name="sourceBackup" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.sourceBackup"></a>

```java
public java.lang.String getSourceBackup();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileSharesOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstanceFileShares getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceFileShares">DataGoogleFilestoreInstanceFileShares</a>

---


### DataGoogleFilestoreInstanceInitialReplicationList <a name="DataGoogleFilestoreInstanceInitialReplicationList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceInitialReplicationList;

new DataGoogleFilestoreInstanceInitialReplicationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.get"></a>

```java
public DataGoogleFilestoreInstanceInitialReplicationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstanceInitialReplicationOutputReference <a name="DataGoogleFilestoreInstanceInitialReplicationOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceInitialReplicationOutputReference;

new DataGoogleFilestoreInstanceInitialReplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.replicas">replicas</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList">DataGoogleFilestoreInstanceInitialReplicationReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplication">DataGoogleFilestoreInstanceInitialReplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.replicas"></a>

```java
public DataGoogleFilestoreInstanceInitialReplicationReplicasList getReplicas();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList">DataGoogleFilestoreInstanceInitialReplicationReplicasList</a>

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstanceInitialReplication getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplication">DataGoogleFilestoreInstanceInitialReplication</a>

---


### DataGoogleFilestoreInstanceInitialReplicationReplicasList <a name="DataGoogleFilestoreInstanceInitialReplicationReplicasList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceInitialReplicationReplicasList;

new DataGoogleFilestoreInstanceInitialReplicationReplicasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.get"></a>

```java
public DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference <a name="DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference;

new DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance">peerInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicas">DataGoogleFilestoreInstanceInitialReplicationReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `peerInstance`<sup>Required</sup> <a name="peerInstance" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.peerInstance"></a>

```java
public java.lang.String getPeerInstance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicasOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstanceInitialReplicationReplicas getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceInitialReplicationReplicas">DataGoogleFilestoreInstanceInitialReplicationReplicas</a>

---


### DataGoogleFilestoreInstanceNetworksList <a name="DataGoogleFilestoreInstanceNetworksList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceNetworksList;

new DataGoogleFilestoreInstanceNetworksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.get"></a>

```java
public DataGoogleFilestoreInstanceNetworksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstanceNetworksOutputReference <a name="DataGoogleFilestoreInstanceNetworksOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstanceNetworksOutputReference;

new DataGoogleFilestoreInstanceNetworksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.connectMode">connectMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.modes">modes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRange">reservedIpRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworks">DataGoogleFilestoreInstanceNetworks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectMode`<sup>Required</sup> <a name="connectMode" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.connectMode"></a>

```java
public java.lang.String getConnectMode();
```

- *Type:* java.lang.String

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `modes`<sup>Required</sup> <a name="modes" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.modes"></a>

```java
public java.util.List<java.lang.String> getModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `reservedIpRange`<sup>Required</sup> <a name="reservedIpRange" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.reservedIpRange"></a>

```java
public java.lang.String getReservedIpRange();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworksOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstanceNetworks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstanceNetworks">DataGoogleFilestoreInstanceNetworks</a>

---


### DataGoogleFilestoreInstancePerformanceConfigFixedIopsList <a name="DataGoogleFilestoreInstancePerformanceConfigFixedIopsList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList;

new DataGoogleFilestoreInstancePerformanceConfigFixedIopsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.get"></a>

```java
public DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference <a name="DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference;

new DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops">maxIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIops">DataGoogleFilestoreInstancePerformanceConfigFixedIops</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxIops`<sup>Required</sup> <a name="maxIops" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.maxIops"></a>

```java
public java.lang.Number getMaxIops();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstancePerformanceConfigFixedIops getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIops">DataGoogleFilestoreInstancePerformanceConfigFixedIops</a>

---


### DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList <a name="DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList;

new DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.get"></a>

```java
public DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference <a name="DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference;

new DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb">maxIopsPerTb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTb">DataGoogleFilestoreInstancePerformanceConfigIopsPerTb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxIopsPerTb`<sup>Required</sup> <a name="maxIopsPerTb" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.maxIopsPerTb"></a>

```java
public java.lang.Number getMaxIopsPerTb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstancePerformanceConfigIopsPerTb getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTb">DataGoogleFilestoreInstancePerformanceConfigIopsPerTb</a>

---


### DataGoogleFilestoreInstancePerformanceConfigList <a name="DataGoogleFilestoreInstancePerformanceConfigList" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstancePerformanceConfigList;

new DataGoogleFilestoreInstancePerformanceConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.get"></a>

```java
public DataGoogleFilestoreInstancePerformanceConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleFilestoreInstancePerformanceConfigOutputReference <a name="DataGoogleFilestoreInstancePerformanceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_filestore_instance.DataGoogleFilestoreInstancePerformanceConfigOutputReference;

new DataGoogleFilestoreInstancePerformanceConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIops">fixedIops</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList">DataGoogleFilestoreInstancePerformanceConfigFixedIopsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb">iopsPerTb</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList">DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfig">DataGoogleFilestoreInstancePerformanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fixedIops`<sup>Required</sup> <a name="fixedIops" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.fixedIops"></a>

```java
public DataGoogleFilestoreInstancePerformanceConfigFixedIopsList getFixedIops();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigFixedIopsList">DataGoogleFilestoreInstancePerformanceConfigFixedIopsList</a>

---

##### `iopsPerTb`<sup>Required</sup> <a name="iopsPerTb" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.iopsPerTb"></a>

```java
public DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList getIopsPerTb();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList">DataGoogleFilestoreInstancePerformanceConfigIopsPerTbList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleFilestoreInstancePerformanceConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleFilestoreInstance.DataGoogleFilestoreInstancePerformanceConfig">DataGoogleFilestoreInstancePerformanceConfig</a>

---



