# `dataGoogleComputeDisk` Submodule <a name="`dataGoogleComputeDisk` Submodule" id="@cdktf/provider-google-beta.dataGoogleComputeDisk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeDisk <a name="DataGoogleComputeDisk" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk google_compute_disk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDisk;

DataGoogleComputeDisk.Builder.create(Construct scope, java.lang.String id)
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
//  .project(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#id DataGoogleComputeDisk#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#project DataGoogleComputeDisk#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the disk resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#name DataGoogleComputeDisk#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#id DataGoogleComputeDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#project DataGoogleComputeDisk#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.Initializer.parameter.zone"></a>

- *Type:* java.lang.String

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#zone DataGoogleComputeDisk#zone}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.resetProject"></a>

```java
public void resetProject()
```

##### `resetZone` <a name="resetZone" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.resetZone"></a>

```java
public void resetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeDisk resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDisk;

DataGoogleComputeDisk.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDisk;

DataGoogleComputeDisk.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDisk;

DataGoogleComputeDisk.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDisk;

DataGoogleComputeDisk.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeDisk.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleComputeDisk resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeDisk to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeDisk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeDisk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.accessMode">accessMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.asyncPrimaryDisk">asyncPrimaryDisk</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList">DataGoogleComputeDiskAsyncPrimaryDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.diskEncryptionKey">diskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList">DataGoogleComputeDiskDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.diskId">diskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.enableConfidentialCompute">enableConfidentialCompute</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.guestOsFeatures">guestOsFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList">DataGoogleComputeDiskGuestOsFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.labelFingerprint">labelFingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.lastAttachTimestamp">lastAttachTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.lastDetachTimestamp">lastDetachTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.licenses">licenses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.multiWriter">multiWriter</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.params">params</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList">DataGoogleComputeDiskParamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.physicalBlockSizeBytes">physicalBlockSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.provisionedIops">provisionedIops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.provisionedThroughput">provisionedThroughput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.resourcePolicies">resourcePolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.snapshot">snapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceDisk">sourceDisk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceDiskId">sourceDiskId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceImageEncryptionKey">sourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList">DataGoogleComputeDiskSourceImageEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceImageId">sourceImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceInstantSnapshot">sourceInstantSnapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceInstantSnapshotId">sourceInstantSnapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceSnapshotEncryptionKey">sourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeDiskSourceSnapshotEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceSnapshotId">sourceSnapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceStorageObject">sourceStorageObject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.storagePool">storagePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.users">users</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `accessMode`<sup>Required</sup> <a name="accessMode" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.accessMode"></a>

```java
public java.lang.String getAccessMode();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `asyncPrimaryDisk`<sup>Required</sup> <a name="asyncPrimaryDisk" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.asyncPrimaryDisk"></a>

```java
public DataGoogleComputeDiskAsyncPrimaryDiskList getAsyncPrimaryDisk();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList">DataGoogleComputeDiskAsyncPrimaryDiskList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `diskEncryptionKey`<sup>Required</sup> <a name="diskEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.diskEncryptionKey"></a>

```java
public DataGoogleComputeDiskDiskEncryptionKeyList getDiskEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList">DataGoogleComputeDiskDiskEncryptionKeyList</a>

---

##### `diskId`<sup>Required</sup> <a name="diskId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.diskId"></a>

```java
public java.lang.String getDiskId();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `enableConfidentialCompute`<sup>Required</sup> <a name="enableConfidentialCompute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.enableConfidentialCompute"></a>

```java
public IResolvable getEnableConfidentialCompute();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `guestOsFeatures`<sup>Required</sup> <a name="guestOsFeatures" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.guestOsFeatures"></a>

```java
public DataGoogleComputeDiskGuestOsFeaturesList getGuestOsFeatures();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList">DataGoogleComputeDiskGuestOsFeaturesList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.labelFingerprint"></a>

```java
public java.lang.String getLabelFingerprint();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `lastAttachTimestamp`<sup>Required</sup> <a name="lastAttachTimestamp" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.lastAttachTimestamp"></a>

```java
public java.lang.String getLastAttachTimestamp();
```

- *Type:* java.lang.String

---

##### `lastDetachTimestamp`<sup>Required</sup> <a name="lastDetachTimestamp" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.lastDetachTimestamp"></a>

```java
public java.lang.String getLastDetachTimestamp();
```

- *Type:* java.lang.String

---

##### `licenses`<sup>Required</sup> <a name="licenses" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.licenses"></a>

```java
public java.util.List<java.lang.String> getLicenses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `multiWriter`<sup>Required</sup> <a name="multiWriter" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.multiWriter"></a>

```java
public IResolvable getMultiWriter();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.params"></a>

```java
public DataGoogleComputeDiskParamsList getParams();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList">DataGoogleComputeDiskParamsList</a>

---

##### `physicalBlockSizeBytes`<sup>Required</sup> <a name="physicalBlockSizeBytes" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.physicalBlockSizeBytes"></a>

```java
public java.lang.Number getPhysicalBlockSizeBytes();
```

- *Type:* java.lang.Number

---

##### `provisionedIops`<sup>Required</sup> <a name="provisionedIops" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.provisionedIops"></a>

```java
public java.lang.Number getProvisionedIops();
```

- *Type:* java.lang.Number

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.provisionedThroughput"></a>

```java
public java.lang.Number getProvisionedThroughput();
```

- *Type:* java.lang.Number

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.resourcePolicies"></a>

```java
public java.util.List<java.lang.String> getResourcePolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.snapshot"></a>

```java
public java.lang.String getSnapshot();
```

- *Type:* java.lang.String

---

##### `sourceDisk`<sup>Required</sup> <a name="sourceDisk" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceDisk"></a>

```java
public java.lang.String getSourceDisk();
```

- *Type:* java.lang.String

---

##### `sourceDiskId`<sup>Required</sup> <a name="sourceDiskId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceDiskId"></a>

```java
public java.lang.String getSourceDiskId();
```

- *Type:* java.lang.String

---

##### `sourceImageEncryptionKey`<sup>Required</sup> <a name="sourceImageEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceImageEncryptionKey"></a>

```java
public DataGoogleComputeDiskSourceImageEncryptionKeyList getSourceImageEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList">DataGoogleComputeDiskSourceImageEncryptionKeyList</a>

---

##### `sourceImageId`<sup>Required</sup> <a name="sourceImageId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceImageId"></a>

```java
public java.lang.String getSourceImageId();
```

- *Type:* java.lang.String

---

##### `sourceInstantSnapshot`<sup>Required</sup> <a name="sourceInstantSnapshot" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceInstantSnapshot"></a>

```java
public java.lang.String getSourceInstantSnapshot();
```

- *Type:* java.lang.String

---

##### `sourceInstantSnapshotId`<sup>Required</sup> <a name="sourceInstantSnapshotId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceInstantSnapshotId"></a>

```java
public java.lang.String getSourceInstantSnapshotId();
```

- *Type:* java.lang.String

---

##### `sourceSnapshotEncryptionKey`<sup>Required</sup> <a name="sourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceSnapshotEncryptionKey"></a>

```java
public DataGoogleComputeDiskSourceSnapshotEncryptionKeyList getSourceSnapshotEncryptionKey();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeDiskSourceSnapshotEncryptionKeyList</a>

---

##### `sourceSnapshotId`<sup>Required</sup> <a name="sourceSnapshotId" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceSnapshotId"></a>

```java
public java.lang.String getSourceSnapshotId();
```

- *Type:* java.lang.String

---

##### `sourceStorageObject`<sup>Required</sup> <a name="sourceStorageObject" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.sourceStorageObject"></a>

```java
public java.lang.String getSourceStorageObject();
```

- *Type:* java.lang.String

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.storagePool"></a>

```java
public java.lang.String getStoragePool();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.users"></a>

```java
public java.util.List<java.lang.String> getUsers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDisk.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeDiskAsyncPrimaryDisk <a name="DataGoogleComputeDiskAsyncPrimaryDisk" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskAsyncPrimaryDisk;

DataGoogleComputeDiskAsyncPrimaryDisk.builder()
    .build();
```


### DataGoogleComputeDiskConfig <a name="DataGoogleComputeDiskConfig" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskConfig;

DataGoogleComputeDiskConfig.builder()
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
//  .project(java.lang.String)
//  .zone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#id DataGoogleComputeDisk#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#project DataGoogleComputeDisk#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.zone">zone</a></code> | <code>java.lang.String</code> | A reference to the zone where the disk resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#name DataGoogleComputeDisk#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#id DataGoogleComputeDisk#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#project DataGoogleComputeDisk#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskConfig.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

A reference to the zone where the disk resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/data-sources/google_compute_disk#zone DataGoogleComputeDisk#zone}

---

### DataGoogleComputeDiskDiskEncryptionKey <a name="DataGoogleComputeDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskDiskEncryptionKey;

DataGoogleComputeDiskDiskEncryptionKey.builder()
    .build();
```


### DataGoogleComputeDiskGuestOsFeatures <a name="DataGoogleComputeDiskGuestOsFeatures" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeatures.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskGuestOsFeatures;

DataGoogleComputeDiskGuestOsFeatures.builder()
    .build();
```


### DataGoogleComputeDiskParams <a name="DataGoogleComputeDiskParams" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParams.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskParams;

DataGoogleComputeDiskParams.builder()
    .build();
```


### DataGoogleComputeDiskSourceImageEncryptionKey <a name="DataGoogleComputeDiskSourceImageEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskSourceImageEncryptionKey;

DataGoogleComputeDiskSourceImageEncryptionKey.builder()
    .build();
```


### DataGoogleComputeDiskSourceSnapshotEncryptionKey <a name="DataGoogleComputeDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskSourceSnapshotEncryptionKey;

DataGoogleComputeDiskSourceSnapshotEncryptionKey.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeDiskAsyncPrimaryDiskList <a name="DataGoogleComputeDiskAsyncPrimaryDiskList" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskAsyncPrimaryDiskList;

new DataGoogleComputeDiskAsyncPrimaryDiskList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.get"></a>

```java
public DataGoogleComputeDiskAsyncPrimaryDiskOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeDiskAsyncPrimaryDiskOutputReference <a name="DataGoogleComputeDiskAsyncPrimaryDiskOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference;

new DataGoogleComputeDiskAsyncPrimaryDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.property.disk">disk</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDisk">DataGoogleComputeDiskAsyncPrimaryDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disk`<sup>Required</sup> <a name="disk" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.property.disk"></a>

```java
public java.lang.String getDisk();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDiskOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeDiskAsyncPrimaryDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskAsyncPrimaryDisk">DataGoogleComputeDiskAsyncPrimaryDisk</a>

---


### DataGoogleComputeDiskDiskEncryptionKeyList <a name="DataGoogleComputeDiskDiskEncryptionKeyList" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskDiskEncryptionKeyList;

new DataGoogleComputeDiskDiskEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.get"></a>

```java
public DataGoogleComputeDiskDiskEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeDiskDiskEncryptionKeyOutputReference <a name="DataGoogleComputeDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference;

new DataGoogleComputeDiskDiskEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey">rsaEncryptedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKey">DataGoogleComputeDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `rsaEncryptedKey`<sup>Required</sup> <a name="rsaEncryptedKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.rsaEncryptedKey"></a>

```java
public java.lang.String getRsaEncryptedKey();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeDiskDiskEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskDiskEncryptionKey">DataGoogleComputeDiskDiskEncryptionKey</a>

---


### DataGoogleComputeDiskGuestOsFeaturesList <a name="DataGoogleComputeDiskGuestOsFeaturesList" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskGuestOsFeaturesList;

new DataGoogleComputeDiskGuestOsFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.get"></a>

```java
public DataGoogleComputeDiskGuestOsFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeDiskGuestOsFeaturesOutputReference <a name="DataGoogleComputeDiskGuestOsFeaturesOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskGuestOsFeaturesOutputReference;

new DataGoogleComputeDiskGuestOsFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeatures">DataGoogleComputeDiskGuestOsFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeaturesOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeDiskGuestOsFeatures getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskGuestOsFeatures">DataGoogleComputeDiskGuestOsFeatures</a>

---


### DataGoogleComputeDiskParamsList <a name="DataGoogleComputeDiskParamsList" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskParamsList;

new DataGoogleComputeDiskParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.get"></a>

```java
public DataGoogleComputeDiskParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeDiskParamsOutputReference <a name="DataGoogleComputeDiskParamsOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskParamsOutputReference;

new DataGoogleComputeDiskParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParams">DataGoogleComputeDiskParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.property.resourceManagerTags"></a>

```java
public StringMap getResourceManagerTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParamsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeDiskParams getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskParams">DataGoogleComputeDiskParams</a>

---


### DataGoogleComputeDiskSourceImageEncryptionKeyList <a name="DataGoogleComputeDiskSourceImageEncryptionKeyList" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskSourceImageEncryptionKeyList;

new DataGoogleComputeDiskSourceImageEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.get"></a>

```java
public DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference <a name="DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference;

new DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKey">DataGoogleComputeDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeDiskSourceImageEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceImageEncryptionKey">DataGoogleComputeDiskSourceImageEncryptionKey</a>

---


### DataGoogleComputeDiskSourceSnapshotEncryptionKeyList <a name="DataGoogleComputeDiskSourceSnapshotEncryptionKeyList" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList;

new DataGoogleComputeDiskSourceSnapshotEncryptionKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.get"></a>

```java
public DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference <a name="DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_disk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference;

new DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">kmsKeySelfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">kmsKeyServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey">rawKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256">sha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKey">DataGoogleComputeDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeySelfLink`<sup>Required</sup> <a name="kmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```java
public java.lang.String getKmsKeySelfLink();
```

- *Type:* java.lang.String

---

##### `kmsKeyServiceAccount`<sup>Required</sup> <a name="kmsKeyServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```java
public java.lang.String getKmsKeyServiceAccount();
```

- *Type:* java.lang.String

---

##### `rawKey`<sup>Required</sup> <a name="rawKey" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.rawKey"></a>

```java
public java.lang.String getRawKey();
```

- *Type:* java.lang.String

---

##### `sha256`<sup>Required</sup> <a name="sha256" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.sha256"></a>

```java
public java.lang.String getSha256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeDiskSourceSnapshotEncryptionKey getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeDisk.DataGoogleComputeDiskSourceSnapshotEncryptionKey">DataGoogleComputeDiskSourceSnapshotEncryptionKey</a>

---



