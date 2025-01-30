# `dataGoogleComputeResourcePolicy` Submodule <a name="`dataGoogleComputeResourcePolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeResourcePolicy <a name="DataGoogleComputeResourcePolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy google_compute_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicy;

DataGoogleComputeResourcePolicy.Builder.create(Construct scope, java.lang.String id)
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
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#id DataGoogleComputeResourcePolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#project DataGoogleComputeResourcePolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where resource policy resides. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the resource, provided by the client when initially creating the resource.

The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#name DataGoogleComputeResourcePolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#id DataGoogleComputeResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#project DataGoogleComputeResourcePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where resource policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#region DataGoogleComputeResourcePolicy#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeResourcePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicy;

DataGoogleComputeResourcePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicy;

DataGoogleComputeResourcePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicy;

DataGoogleComputeResourcePolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicy;

DataGoogleComputeResourcePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeResourcePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataGoogleComputeResourcePolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeResourcePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeResourcePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeResourcePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.diskConsistencyGroupPolicy">diskConsistencyGroupPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList">DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.groupPlacementPolicy">groupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList">DataGoogleComputeResourcePolicyGroupPlacementPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.instanceSchedulePolicy">instanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.snapshotSchedulePolicy">snapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `diskConsistencyGroupPolicy`<sup>Required</sup> <a name="diskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.diskConsistencyGroupPolicy"></a>

```java
public DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList getDiskConsistencyGroupPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList">DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList</a>

---

##### `groupPlacementPolicy`<sup>Required</sup> <a name="groupPlacementPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.groupPlacementPolicy"></a>

```java
public DataGoogleComputeResourcePolicyGroupPlacementPolicyList getGroupPlacementPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList">DataGoogleComputeResourcePolicyGroupPlacementPolicyList</a>

---

##### `instanceSchedulePolicy`<sup>Required</sup> <a name="instanceSchedulePolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.instanceSchedulePolicy"></a>

```java
public DataGoogleComputeResourcePolicyInstanceSchedulePolicyList getInstanceSchedulePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `snapshotSchedulePolicy`<sup>Required</sup> <a name="snapshotSchedulePolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.snapshotSchedulePolicy"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyList getSnapshotSchedulePolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeResourcePolicyConfig <a name="DataGoogleComputeResourcePolicyConfig" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyConfig;

DataGoogleComputeResourcePolicyConfig.builder()
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
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#id DataGoogleComputeResourcePolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#project DataGoogleComputeResourcePolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where resource policy resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the resource, provided by the client when initially creating the resource.

The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#name DataGoogleComputeResourcePolicy#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#id DataGoogleComputeResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#project DataGoogleComputeResourcePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where resource policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/data-sources/google_compute_resource_policy#region DataGoogleComputeResourcePolicy#region}

---

### DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy <a name="DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy;

DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy.builder()
    .build();
```


### DataGoogleComputeResourcePolicyGroupPlacementPolicy <a name="DataGoogleComputeResourcePolicyGroupPlacementPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyGroupPlacementPolicy;

DataGoogleComputeResourcePolicyGroupPlacementPolicy.builder()
    .build();
```


### DataGoogleComputeResourcePolicyInstanceSchedulePolicy <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy;

DataGoogleComputeResourcePolicyInstanceSchedulePolicy.builder()
    .build();
```


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule;

DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.builder()
    .build();
```


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule;

DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.builder()
    .build();
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicy <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy;

DataGoogleComputeResourcePolicySnapshotSchedulePolicy.builder()
    .build();
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy;

DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.builder()
    .build();
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule;

DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule.builder()
    .build();
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule;

DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.builder()
    .build();
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule;

DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.builder()
    .build();
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule;

DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.builder()
    .build();
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks;

DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.builder()
    .build();
```


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties;

DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList <a name="DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList;

new DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.get"></a>

```java
public DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference <a name="DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference;

new DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy">DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy">DataGoogleComputeResourcePolicyDiskConsistencyGroupPolicy</a>

---


### DataGoogleComputeResourcePolicyGroupPlacementPolicyList <a name="DataGoogleComputeResourcePolicyGroupPlacementPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList;

new DataGoogleComputeResourcePolicyGroupPlacementPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.get"></a>

```java
public DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference <a name="DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference;

new DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount">availabilityDomainCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation">collocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistance">maxDistance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount">vmCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy">DataGoogleComputeResourcePolicyGroupPlacementPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomainCount`<sup>Required</sup> <a name="availabilityDomainCount" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount"></a>

```java
public java.lang.Number getAvailabilityDomainCount();
```

- *Type:* java.lang.Number

---

##### `collocation`<sup>Required</sup> <a name="collocation" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation"></a>

```java
public java.lang.String getCollocation();
```

- *Type:* java.lang.String

---

##### `maxDistance`<sup>Required</sup> <a name="maxDistance" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.maxDistance"></a>

```java
public java.lang.Number getMaxDistance();
```

- *Type:* java.lang.Number

---

##### `vmCount`<sup>Required</sup> <a name="vmCount" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount"></a>

```java
public java.lang.Number getVmCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicyGroupPlacementPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyGroupPlacementPolicy">DataGoogleComputeResourcePolicyGroupPlacementPolicy</a>

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyList <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList;

new DataGoogleComputeResourcePolicyInstanceSchedulePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.get"></a>

```java
public DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference;

new DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule">vmStartSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule">vmStopSchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy">DataGoogleComputeResourcePolicyInstanceSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `vmStartSchedule`<sup>Required</sup> <a name="vmStartSchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule"></a>

```java
public DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList getVmStartSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList</a>

---

##### `vmStopSchedule`<sup>Required</sup> <a name="vmStopSchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule"></a>

```java
public DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList getVmStopSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicyInstanceSchedulePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicy">DataGoogleComputeResourcePolicyInstanceSchedulePolicy</a>

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList;

new DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.get"></a>

```java
public DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference;

new DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList;

new DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.get"></a>

```java
public DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference <a name="DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference;

new DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">DataGoogleComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.get"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy">retentionPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties">snapshotProperties</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `retentionPolicy`<sup>Required</sup> <a name="retentionPolicy" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList getRetentionPolicy();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList getSchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList</a>

---

##### `snapshotProperties`<sup>Required</sup> <a name="snapshotProperties" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList getSnapshotProperties();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicy</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.get"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays">maxRetentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete">onSourceDiskDelete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxRetentionDays`<sup>Required</sup> <a name="maxRetentionDays" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays"></a>

```java
public java.lang.Number getMaxRetentionDays();
```

- *Type:* java.lang.Number

---

##### `onSourceDiskDelete`<sup>Required</sup> <a name="onSourceDiskDelete" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete"></a>

```java
public java.lang.String getOnSourceDiskDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">DataGoogleComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.get"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle">daysInCycle</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysInCycle`<sup>Required</sup> <a name="daysInCycle" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle"></a>

```java
public java.lang.Number getDaysInCycle();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.get"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle">hoursInCycle</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hoursInCycle`<sup>Required</sup> <a name="hoursInCycle" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle"></a>

```java
public java.lang.Number getHoursInCycle();
```

- *Type:* java.lang.Number

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.get"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule">dailySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule">hourlySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule">weeklySchedule</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dailySchedule`<sup>Required</sup> <a name="dailySchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList getDailySchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleList</a>

---

##### `hourlySchedule`<sup>Required</sup> <a name="hourlySchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList getHourlySchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleList</a>

---

##### `weeklySchedule`<sup>Required</sup> <a name="weeklySchedule" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList getWeeklySchedule();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day">day</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day"></a>

```java
public java.lang.String getDay();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.get"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks">dayOfWeeks</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfWeeks`<sup>Required</sup> <a name="dayOfWeeks" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList getDayOfWeeks();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">DataGoogleComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.get"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference <a name="DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.data_google_compute_resource_policy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference;

new DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName">chainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush">guestFlush</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels">labels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations">storageLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `chainName`<sup>Required</sup> <a name="chainName" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName"></a>

```java
public java.lang.String getChainName();
```

- *Type:* java.lang.String

---

##### `guestFlush`<sup>Required</sup> <a name="guestFlush" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush"></a>

```java
public IResolvable getGuestFlush();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `storageLocations`<sup>Required</sup> <a name="storageLocations" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations"></a>

```java
public java.util.List<java.lang.String> getStorageLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeResourcePolicy.DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">DataGoogleComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---



