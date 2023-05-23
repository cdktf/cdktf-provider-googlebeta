# `google_access_context_manager_service_perimeter`

Refer to the Terraform Registory for docs: [`google_access_context_manager_service_perimeter`](https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter).

# `googleAccessContextManagerServicePerimeter` Submodule <a name="`googleAccessContextManagerServicePerimeter` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeter <a name="GoogleAccessContextManagerServicePerimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter google_access_context_manager_service_perimeter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeter;

GoogleAccessContextManagerServicePerimeter.Builder.create(Construct scope, java.lang.String id)
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
    .parent(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .perimeterType(java.lang.String)
//  .spec(GoogleAccessContextManagerServicePerimeterSpec)
//  .status(GoogleAccessContextManagerServicePerimeterStatus)
//  .timeouts(GoogleAccessContextManagerServicePerimeterTimeouts)
//  .useExplicitDryRunSpec(java.lang.Boolean)
//  .useExplicitDryRunSpec(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the ServicePerimeter and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#id GoogleAccessContextManagerServicePerimeter#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.perimeterType">perimeterType</a></code> | <code>java.lang.String</code> | Specifies the type of the Perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a></code> | status block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.useExplicitDryRunSpec">useExplicitDryRunSpec</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use explicit dry run spec flag. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#name GoogleAccessContextManagerServicePerimeter#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#parent GoogleAccessContextManagerServicePerimeter#parent}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#title GoogleAccessContextManagerServicePerimeter#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the ServicePerimeter and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#description GoogleAccessContextManagerServicePerimeter#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#id GoogleAccessContextManagerServicePerimeter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `perimeterType`<sup>Optional</sup> <a name="perimeterType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.perimeterType"></a>

- *Type:* java.lang.String

Specifies the type of the Perimeter.

There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#perimeter_type GoogleAccessContextManagerServicePerimeter#perimeter_type}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#spec GoogleAccessContextManagerServicePerimeter#spec}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.status"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a>

status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#status GoogleAccessContextManagerServicePerimeter#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#timeouts GoogleAccessContextManagerServicePerimeter#timeouts}

---

##### `useExplicitDryRunSpec`<sup>Optional</sup> <a name="useExplicitDryRunSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.Initializer.parameter.useExplicitDryRunSpec"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use explicit dry run spec flag.

Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#use_explicit_dry_run_spec GoogleAccessContextManagerServicePerimeter#use_explicit_dry_run_spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putStatus">putStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetPerimeterType">resetPerimeterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetUseExplicitDryRunSpec">resetUseExplicitDryRunSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putSpec"></a>

```java
public void putSpec(GoogleAccessContextManagerServicePerimeterSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a>

---

##### `putStatus` <a name="putStatus" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putStatus"></a>

```java
public void putStatus(GoogleAccessContextManagerServicePerimeterStatus value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putTimeouts"></a>

```java
public void putTimeouts(GoogleAccessContextManagerServicePerimeterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetId"></a>

```java
public void resetId()
```

##### `resetPerimeterType` <a name="resetPerimeterType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetPerimeterType"></a>

```java
public void resetPerimeterType()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUseExplicitDryRunSpec` <a name="resetUseExplicitDryRunSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.resetUseExplicitDryRunSpec"></a>

```java
public void resetUseExplicitDryRunSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeter;

GoogleAccessContextManagerServicePerimeter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeter;

GoogleAccessContextManagerServicePerimeter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeter;

GoogleAccessContextManagerServicePerimeter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference">GoogleAccessContextManagerServicePerimeterSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference">GoogleAccessContextManagerServicePerimeterStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.perimeterTypeInput">perimeterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.statusInput">statusInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.useExplicitDryRunSpecInput">useExplicitDryRunSpecInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.perimeterType">perimeterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.useExplicitDryRunSpec">useExplicitDryRunSpec</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.spec"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference">GoogleAccessContextManagerServicePerimeterSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.status"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusOutputReference getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference">GoogleAccessContextManagerServicePerimeterStatusOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.timeouts"></a>

```java
public GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `perimeterTypeInput`<sup>Optional</sup> <a name="perimeterTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.perimeterTypeInput"></a>

```java
public java.lang.String getPerimeterTypeInput();
```

- *Type:* java.lang.String

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.specInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.statusInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatus getStatusInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `useExplicitDryRunSpecInput`<sup>Optional</sup> <a name="useExplicitDryRunSpecInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.useExplicitDryRunSpecInput"></a>

```java
public java.lang.Object getUseExplicitDryRunSpecInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `perimeterType`<sup>Required</sup> <a name="perimeterType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.perimeterType"></a>

```java
public java.lang.String getPerimeterType();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `useExplicitDryRunSpec`<sup>Required</sup> <a name="useExplicitDryRunSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.useExplicitDryRunSpec"></a>

```java
public java.lang.Object getUseExplicitDryRunSpec();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterConfig <a name="GoogleAccessContextManagerServicePerimeterConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterConfig;

GoogleAccessContextManagerServicePerimeterConfig.builder()
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
    .parent(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .perimeterType(java.lang.String)
//  .spec(GoogleAccessContextManagerServicePerimeterSpec)
//  .status(GoogleAccessContextManagerServicePerimeterStatus)
//  .timeouts(GoogleAccessContextManagerServicePerimeterTimeouts)
//  .useExplicitDryRunSpec(java.lang.Boolean)
//  .useExplicitDryRunSpec(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.name">name</a></code> | <code>java.lang.String</code> | Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the Policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the ServicePerimeter and its use. Does not affect behavior. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#id GoogleAccessContextManagerServicePerimeter#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.perimeterType">perimeterType</a></code> | <code>java.lang.String</code> | Specifies the type of the Perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.status">status</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a></code> | status block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.useExplicitDryRunSpec">useExplicitDryRunSpec</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use explicit dry run spec flag. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Resource name for the ServicePerimeter. The short_name component must begin with a letter and only include alphanumeric and '_'. Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#name GoogleAccessContextManagerServicePerimeter#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The AccessPolicy this ServicePerimeter lives in. Format: accessPolicies/{policy_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#parent GoogleAccessContextManagerServicePerimeter#parent}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Human readable title. Must be unique within the Policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#title GoogleAccessContextManagerServicePerimeter#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the ServicePerimeter and its use. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#description GoogleAccessContextManagerServicePerimeter#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#id GoogleAccessContextManagerServicePerimeter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `perimeterType`<sup>Optional</sup> <a name="perimeterType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.perimeterType"></a>

```java
public java.lang.String getPerimeterType();
```

- *Type:* java.lang.String

Specifies the type of the Perimeter.

There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.

In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.

Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves. Default value: "PERIMETER_TYPE_REGULAR" Possible values: ["PERIMETER_TYPE_REGULAR", "PERIMETER_TYPE_BRIDGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#perimeter_type GoogleAccessContextManagerServicePerimeter#perimeter_type}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.spec"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#spec GoogleAccessContextManagerServicePerimeter#spec}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.status"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatus getStatus();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a>

status block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#status GoogleAccessContextManagerServicePerimeter#status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.timeouts"></a>

```java
public GoogleAccessContextManagerServicePerimeterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#timeouts GoogleAccessContextManagerServicePerimeter#timeouts}

---

##### `useExplicitDryRunSpec`<sup>Optional</sup> <a name="useExplicitDryRunSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterConfig.property.useExplicitDryRunSpec"></a>

```java
public java.lang.Object getUseExplicitDryRunSpec();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use explicit dry run spec flag.

Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#use_explicit_dry_run_spec GoogleAccessContextManagerServicePerimeter#use_explicit_dry_run_spec}

---

### GoogleAccessContextManagerServicePerimeterSpec <a name="GoogleAccessContextManagerServicePerimeterSpec" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpec;

GoogleAccessContextManagerServicePerimeterSpec.builder()
//  .accessLevels(java.util.List<java.lang.String>)
//  .egressPolicies(IResolvable)
//  .egressPolicies(java.util.List<GoogleAccessContextManagerServicePerimeterSpecEgressPolicies>)
//  .ingressPolicies(IResolvable)
//  .ingressPolicies(java.util.List<GoogleAccessContextManagerServicePerimeterSpecIngressPolicies>)
//  .resources(java.util.List<java.lang.String>)
//  .restrictedServices(java.util.List<java.lang.String>)
//  .vpcAccessibleServices(GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.egressPolicies">egressPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies">GoogleAccessContextManagerServicePerimeterSpecEgressPolicies</a>></code> | egress_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.ingressPolicies">ingressPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies">GoogleAccessContextManagerServicePerimeterSpecIngressPolicies</a>></code> | ingress_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.restrictedServices">restrictedServices</a></code> | <code>java.util.List<java.lang.String></code> | GCP services that are subject to the Service Perimeter restrictions. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.vpcAccessibleServices">vpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a></code> | vpc_accessible_services block. |

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#access_levels GoogleAccessContextManagerServicePerimeter#access_levels}

---

##### `egressPolicies`<sup>Optional</sup> <a name="egressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.egressPolicies"></a>

```java
public java.lang.Object getEgressPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies">GoogleAccessContextManagerServicePerimeterSpecEgressPolicies</a>>

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#egress_policies GoogleAccessContextManagerServicePerimeter#egress_policies}

---

##### `ingressPolicies`<sup>Optional</sup> <a name="ingressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.ingressPolicies"></a>

```java
public java.lang.Object getIngressPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies">GoogleAccessContextManagerServicePerimeterSpecIngressPolicies</a>>

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#ingress_policies GoogleAccessContextManagerServicePerimeter#ingress_policies}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

##### `restrictedServices`<sup>Optional</sup> <a name="restrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.restrictedServices"></a>

```java
public java.util.List<java.lang.String> getRestrictedServices();
```

- *Type:* java.util.List<java.lang.String>

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#restricted_services GoogleAccessContextManagerServicePerimeter#restricted_services}

---

##### `vpcAccessibleServices`<sup>Optional</sup> <a name="vpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec.property.vpcAccessibleServices"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices getVpcAccessibleServices();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#vpc_accessible_services GoogleAccessContextManagerServicePerimeter#vpc_accessible_services}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPolicies <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies;

GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.builder()
//  .egressFrom(GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom)
//  .egressTo(GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a></code> | egress_to block. |

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.property.egressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#egress_from GoogleAccessContextManagerServicePerimeter#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies.property.egressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#egress_to GoogleAccessContextManagerServicePerimeter#egress_to}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom;

GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access to outside the perimeter. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo;

GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.builder()
//  .externalResources(java.util.List<java.lang.String>)
//  .operations(IResolvable)
//  .operations(java.util.List<GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `externalResources`<sup>Optional</sup> <a name="externalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#external_resources GoogleAccessContextManagerServicePerimeter#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations;

GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}

---

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors;

GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPolicies <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies;

GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.builder()
//  .ingressFrom(GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom)
//  .ingressTo(GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a></code> | ingress_to block. |

---

##### `ingressFrom`<sup>Optional</sup> <a name="ingressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#ingress_from GoogleAccessContextManagerServicePerimeter#ingress_from}

---

##### `ingressTo`<sup>Optional</sup> <a name="ingressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies.property.ingressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#ingress_to GoogleAccessContextManagerServicePerimeter#ingress_to}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom;

GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
//  .sources(IResolvable)
//  .sources(java.util.List<GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | A list of identities that are allowed access through this ingress policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>></code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

A list of identities that are allowed access through this ingress policy.

Should be in the format of email address. The email address should represent
individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom.property.sources"></a>

```java
public java.lang.Object getSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources;

GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.builder()
//  .accessLevel(java.lang.String)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.resource">resource</a></code> | <code>java.lang.String</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#resource GoogleAccessContextManagerServicePerimeter#resource}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo;

GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.builder()
//  .operations(IResolvable)
//  .operations(java.util.List<GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations;

GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}

---

### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors;

GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}

---

### GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices <a name="GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices;

GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.builder()
//  .allowedServices(java.util.List<java.lang.String>)
//  .enableRestriction(java.lang.Boolean)
//  .enableRestriction(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.allowedServices">allowedServices</a></code> | <code>java.util.List<java.lang.String></code> | The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.enableRestriction">enableRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'. |

---

##### `allowedServices`<sup>Optional</sup> <a name="allowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.allowedServices"></a>

```java
public java.util.List<java.lang.String> getAllowedServices();
```

- *Type:* java.util.List<java.lang.String>

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#allowed_services GoogleAccessContextManagerServicePerimeter#allowed_services}

---

##### `enableRestriction`<sup>Optional</sup> <a name="enableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices.property.enableRestriction"></a>

```java
public java.lang.Object getEnableRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#enable_restriction GoogleAccessContextManagerServicePerimeter#enable_restriction}

---

### GoogleAccessContextManagerServicePerimeterStatus <a name="GoogleAccessContextManagerServicePerimeterStatus" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatus;

GoogleAccessContextManagerServicePerimeterStatus.builder()
//  .accessLevels(java.util.List<java.lang.String>)
//  .egressPolicies(IResolvable)
//  .egressPolicies(java.util.List<GoogleAccessContextManagerServicePerimeterStatusEgressPolicies>)
//  .ingressPolicies(IResolvable)
//  .ingressPolicies(java.util.List<GoogleAccessContextManagerServicePerimeterStatusIngressPolicies>)
//  .resources(java.util.List<java.lang.String>)
//  .restrictedServices(java.util.List<java.lang.String>)
//  .vpcAccessibleServices(GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.egressPolicies">egressPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies">GoogleAccessContextManagerServicePerimeterStatusEgressPolicies</a>></code> | egress_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.ingressPolicies">ingressPolicies</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies">GoogleAccessContextManagerServicePerimeterStatusIngressPolicies</a>></code> | ingress_policies block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.restrictedServices">restrictedServices</a></code> | <code>java.util.List<java.lang.String></code> | GCP services that are subject to the Service Perimeter restrictions. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.vpcAccessibleServices">vpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a></code> | vpc_accessible_services block. |

---

##### `accessLevels`<sup>Optional</sup> <a name="accessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

A list of AccessLevel resource names that allow resources within the ServicePerimeter to be accessed from the internet.

AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.

Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#access_levels GoogleAccessContextManagerServicePerimeter#access_levels}

---

##### `egressPolicies`<sup>Optional</sup> <a name="egressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.egressPolicies"></a>

```java
public java.lang.Object getEgressPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies">GoogleAccessContextManagerServicePerimeterStatusEgressPolicies</a>>

egress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#egress_policies GoogleAccessContextManagerServicePerimeter#egress_policies}

---

##### `ingressPolicies`<sup>Optional</sup> <a name="ingressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.ingressPolicies"></a>

```java
public java.lang.Object getIngressPolicies();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies">GoogleAccessContextManagerServicePerimeterStatusIngressPolicies</a>>

ingress_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#ingress_policies GoogleAccessContextManagerServicePerimeter#ingress_policies}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of GCP resources that are inside of the service perimeter. Currently only projects are allowed. Format: projects/{project_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

##### `restrictedServices`<sup>Optional</sup> <a name="restrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.restrictedServices"></a>

```java
public java.util.List<java.lang.String> getRestrictedServices();
```

- *Type:* java.util.List<java.lang.String>

GCP services that are subject to the Service Perimeter restrictions.

Must contain a list of services. For example, if
'storage.googleapis.com' is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#restricted_services GoogleAccessContextManagerServicePerimeter#restricted_services}

---

##### `vpcAccessibleServices`<sup>Optional</sup> <a name="vpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus.property.vpcAccessibleServices"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices getVpcAccessibleServices();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

vpc_accessible_services block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#vpc_accessible_services GoogleAccessContextManagerServicePerimeter#vpc_accessible_services}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPolicies <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies;

GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.builder()
//  .egressFrom(GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom)
//  .egressTo(GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a></code> | egress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a></code> | egress_to block. |

---

##### `egressFrom`<sup>Optional</sup> <a name="egressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.property.egressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

egress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#egress_from GoogleAccessContextManagerServicePerimeter#egress_from}

---

##### `egressTo`<sup>Optional</sup> <a name="egressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies.property.egressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

egress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#egress_to GoogleAccessContextManagerServicePerimeter#egress_to}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom;

GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | A list of identities that are allowed access through this 'EgressPolicy'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access to outside the perimeter. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

A list of identities that are allowed access through this 'EgressPolicy'.

Should be in the format of email address. The email address should
represent individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access to outside the perimeter.

If left unspecified, then members of 'identities' field will
be allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo;

GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.builder()
//  .externalResources(java.util.List<java.lang.String>)
//  .operations(IResolvable)
//  .operations(java.util.List<GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | A list of external resources that are allowed to be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza. |

---

##### `externalResources`<sup>Optional</sup> <a name="externalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

A list of external resources that are allowed to be accessed.

A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '*' is not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#external_resources GoogleAccessContextManagerServicePerimeter#external_resources}

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form 'projects/<projectnumber>', that match this to stanza.

A request matches
if it contains a resource in this list. If * is specified for resources,
then this 'EgressTo' rule will authorize access to all resources outside
the perimeter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations;

GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with serviceName
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}

---

### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors;

GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for 'method' should be a valid method name for the corresponding 'serviceName' in 'ApiOperation'.

If '*' used as value for method,
then ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPolicies <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies;

GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.builder()
//  .ingressFrom(GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom)
//  .ingressTo(GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a></code> | ingress_to block. |

---

##### `ingressFrom`<sup>Optional</sup> <a name="ingressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#ingress_from GoogleAccessContextManagerServicePerimeter#ingress_from}

---

##### `ingressTo`<sup>Optional</sup> <a name="ingressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies.property.ingressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#ingress_to GoogleAccessContextManagerServicePerimeter#ingress_to}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom;

GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
//  .sources(IResolvable)
//  .sources(java.util.List<GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | A list of identities that are allowed access through this ingress policy. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>></code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

A list of identities that are allowed access through this ingress policy.

Should be in the format of email address. The email address should represent
individual user or service account only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#identities GoogleAccessContextManagerServicePerimeter#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["IDENTITY_TYPE_UNSPECIFIED", "ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#identity_type GoogleAccessContextManagerServicePerimeter#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom.property.sources"></a>

```java
public java.lang.Object getSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#sources GoogleAccessContextManagerServicePerimeter#sources}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources;

GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.builder()
//  .accessLevel(java.lang.String)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.resource">resource</a></code> | <code>java.lang.String</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#access_level GoogleAccessContextManagerServicePerimeter#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format 'projects/{project_number}'
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#resource GoogleAccessContextManagerServicePerimeter#resource}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo;

GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.builder()
//  .operations(IResolvable)
//  .operations(java.util.List<GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#operations GoogleAccessContextManagerServicePerimeter#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#resources GoogleAccessContextManagerServicePerimeter#resources}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations;

GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#method_selectors GoogleAccessContextManagerServicePerimeter#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#service_name GoogleAccessContextManagerServicePerimeter#service_name}

---

### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors;

GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#method GoogleAccessContextManagerServicePerimeter#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#permission GoogleAccessContextManagerServicePerimeter#permission}

---

### GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices <a name="GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices;

GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.builder()
//  .allowedServices(java.util.List<java.lang.String>)
//  .enableRestriction(java.lang.Boolean)
//  .enableRestriction(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.allowedServices">allowedServices</a></code> | <code>java.util.List<java.lang.String></code> | The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.enableRestriction">enableRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'. |

---

##### `allowedServices`<sup>Optional</sup> <a name="allowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.allowedServices"></a>

```java
public java.util.List<java.lang.String> getAllowedServices();
```

- *Type:* java.util.List<java.lang.String>

The list of APIs usable within the Service Perimeter. Must be empty unless 'enableRestriction' is True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#allowed_services GoogleAccessContextManagerServicePerimeter#allowed_services}

---

##### `enableRestriction`<sup>Optional</sup> <a name="enableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices.property.enableRestriction"></a>

```java
public java.lang.Object getEnableRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to restrict API calls within the Service Perimeter to the list of APIs specified in 'allowedServices'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#enable_restriction GoogleAccessContextManagerServicePerimeter#enable_restriction}

---

### GoogleAccessContextManagerServicePerimeterTimeouts <a name="GoogleAccessContextManagerServicePerimeterTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterTimeouts;

GoogleAccessContextManagerServicePerimeterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#create GoogleAccessContextManagerServicePerimeter#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#delete GoogleAccessContextManagerServicePerimeter#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#update GoogleAccessContextManagerServicePerimeter#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#create GoogleAccessContextManagerServicePerimeter#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#delete GoogleAccessContextManagerServicePerimeter#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.66.0/docs/resources/google_access_context_manager_service_perimeter#update GoogleAccessContextManagerServicePerimeter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList;

new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>>

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList;

new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>>

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetExternalResources">resetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>>

---

##### `resetExternalResources` <a name="resetExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetExternalResources"></a>

```java
public void resetExternalResources()
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResourcesInput">externalResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operations"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperationsList</a>

---

##### `externalResourcesInput`<sup>Optional</sup> <a name="externalResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResourcesInput"></a>

```java
public java.util.List<java.lang.String> getExternalResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalResources`<sup>Required</sup> <a name="externalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList;

new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies">GoogleAccessContextManagerServicePerimeterSpecEgressPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies">GoogleAccessContextManagerServicePerimeterSpecEgressPolicies</a>>

---


### GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom">putEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo">putEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressFrom">resetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressTo">resetEgressTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressFrom` <a name="putEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom"></a>

```java
public void putEgressFrom(GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

---

##### `putEgressTo` <a name="putEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo"></a>

```java
public void putEgressTo(GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

---

##### `resetEgressFrom` <a name="resetEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressFrom"></a>

```java
public void resetEgressFrom()
```

##### `resetEgressTo` <a name="resetEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.resetEgressTo"></a>

```java
public void resetEgressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFromInput">egressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressToInput">egressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies">GoogleAccessContextManagerServicePerimeterSpecEgressPolicies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressFrom`<sup>Required</sup> <a name="egressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFromOutputReference</a>

---

##### `egressTo`<sup>Required</sup> <a name="egressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressToOutputReference</a>

---

##### `egressFromInput`<sup>Optional</sup> <a name="egressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressFromInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom getEgressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressFrom</a>

---

##### `egressToInput`<sup>Optional</sup> <a name="egressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.egressToInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo getEgressToInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesEgressTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies">GoogleAccessContextManagerServicePerimeterSpecEgressPolicies</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.putSources"></a>

```java
public void putSources(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>>

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sources"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList getSources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>>

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a>>

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromSources</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>>

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>>

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>>

---

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operations"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperationsList</a>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies">GoogleAccessContextManagerServicePerimeterSpecIngressPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies">GoogleAccessContextManagerServicePerimeterSpecIngressPolicies</a>>

---


### GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom">putIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo">putIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressFrom">resetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressTo">resetIngressTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngressFrom` <a name="putIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom"></a>

```java
public void putIngressFrom(GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

---

##### `putIngressTo` <a name="putIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo"></a>

```java
public void putIngressTo(GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

---

##### `resetIngressFrom` <a name="resetIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressFrom"></a>

```java
public void resetIngressFrom()
```

##### `resetIngressTo` <a name="resetIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.resetIngressTo"></a>

```java
public void resetIngressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFromInput">ingressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressToInput">ingressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies">GoogleAccessContextManagerServicePerimeterSpecIngressPolicies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressFrom`<sup>Required</sup> <a name="ingressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFromOutputReference</a>

---

##### `ingressTo`<sup>Required</sup> <a name="ingressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressToOutputReference</a>

---

##### `ingressFromInput`<sup>Optional</sup> <a name="ingressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressFromInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom getIngressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressFrom</a>

---

##### `ingressToInput`<sup>Optional</sup> <a name="ingressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.ingressToInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo getIngressToInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesIngressTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies">GoogleAccessContextManagerServicePerimeterSpecIngressPolicies</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterSpecOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putEgressPolicies">putEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putIngressPolicies">putIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices">putVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetAccessLevels">resetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetEgressPolicies">resetEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetIngressPolicies">resetIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetRestrictedServices">resetRestrictedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetVpcAccessibleServices">resetVpcAccessibleServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressPolicies` <a name="putEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putEgressPolicies"></a>

```java
public void putEgressPolicies(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterSpecEgressPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putEgressPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies">GoogleAccessContextManagerServicePerimeterSpecEgressPolicies</a>>

---

##### `putIngressPolicies` <a name="putIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putIngressPolicies"></a>

```java
public void putIngressPolicies(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterSpecIngressPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putIngressPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies">GoogleAccessContextManagerServicePerimeterSpecIngressPolicies</a>>

---

##### `putVpcAccessibleServices` <a name="putVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices"></a>

```java
public void putVpcAccessibleServices(GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.putVpcAccessibleServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

---

##### `resetAccessLevels` <a name="resetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetAccessLevels"></a>

```java
public void resetAccessLevels()
```

##### `resetEgressPolicies` <a name="resetEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetEgressPolicies"></a>

```java
public void resetEgressPolicies()
```

##### `resetIngressPolicies` <a name="resetIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetIngressPolicies"></a>

```java
public void resetIngressPolicies()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetRestrictedServices` <a name="resetRestrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetRestrictedServices"></a>

```java
public void resetRestrictedServices()
```

##### `resetVpcAccessibleServices` <a name="resetVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.resetVpcAccessibleServices"></a>

```java
public void resetVpcAccessibleServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.egressPolicies">egressPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.ingressPolicies">ingressPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServices">vpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.accessLevelsInput">accessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.egressPoliciesInput">egressPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies">GoogleAccessContextManagerServicePerimeterSpecEgressPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.ingressPoliciesInput">ingressPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies">GoogleAccessContextManagerServicePerimeterSpecIngressPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServicesInput">restrictedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServicesInput">vpcAccessibleServicesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServices">restrictedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressPolicies`<sup>Required</sup> <a name="egressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.egressPolicies"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList getEgressPolicies();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList">GoogleAccessContextManagerServicePerimeterSpecEgressPoliciesList</a>

---

##### `ingressPolicies`<sup>Required</sup> <a name="ingressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.ingressPolicies"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList getIngressPolicies();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList">GoogleAccessContextManagerServicePerimeterSpecIngressPoliciesList</a>

---

##### `vpcAccessibleServices`<sup>Required</sup> <a name="vpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServices"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference getVpcAccessibleServices();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference</a>

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.accessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `egressPoliciesInput`<sup>Optional</sup> <a name="egressPoliciesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.egressPoliciesInput"></a>

```java
public java.lang.Object getEgressPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecEgressPolicies">GoogleAccessContextManagerServicePerimeterSpecEgressPolicies</a>>

---

##### `ingressPoliciesInput`<sup>Optional</sup> <a name="ingressPoliciesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.ingressPoliciesInput"></a>

```java
public java.lang.Object getIngressPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecIngressPolicies">GoogleAccessContextManagerServicePerimeterSpecIngressPolicies</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedServicesInput`<sup>Optional</sup> <a name="restrictedServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServicesInput"></a>

```java
public java.util.List<java.lang.String> getRestrictedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcAccessibleServicesInput`<sup>Optional</sup> <a name="vpcAccessibleServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.vpcAccessibleServicesInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices getVpcAccessibleServicesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedServices`<sup>Required</sup> <a name="restrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.restrictedServices"></a>

```java
public java.util.List<java.lang.String> getRestrictedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpec">GoogleAccessContextManagerServicePerimeterSpec</a>

---


### GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference <a name="GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference;

new GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetAllowedServices">resetAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetEnableRestriction">resetEnableRestriction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedServices` <a name="resetAllowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetAllowedServices"></a>

```java
public void resetAllowedServices()
```

##### `resetEnableRestriction` <a name="resetEnableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.resetEnableRestriction"></a>

```java
public void resetEnableRestriction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServicesInput">allowedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestrictionInput">enableRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServices">allowedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestriction">enableRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedServicesInput`<sup>Optional</sup> <a name="allowedServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServicesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRestrictionInput`<sup>Optional</sup> <a name="enableRestrictionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestrictionInput"></a>

```java
public java.lang.Object getEnableRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedServices`<sup>Required</sup> <a name="allowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.allowedServices"></a>

```java
public java.util.List<java.lang.String> getAllowedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRestriction`<sup>Required</sup> <a name="enableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.enableRestriction"></a>

```java
public java.lang.Object getEnableRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServicesOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterSpecVpcAccessibleServices</a>

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList;

new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>>

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList;

new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>>

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectors"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetExternalResources">resetExternalResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>>

---

##### `resetExternalResources` <a name="resetExternalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetExternalResources"></a>

```java
public void resetExternalResources()
```

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResourcesInput">externalResourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResources">externalResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operations"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperationsList</a>

---

##### `externalResourcesInput`<sup>Optional</sup> <a name="externalResourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResourcesInput"></a>

```java
public java.util.List<java.lang.String> getExternalResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalResources`<sup>Required</sup> <a name="externalResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.externalResources"></a>

```java
public java.util.List<java.lang.String> getExternalResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList;

new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies">GoogleAccessContextManagerServicePerimeterStatusEgressPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies">GoogleAccessContextManagerServicePerimeterStatusEgressPolicies</a>>

---


### GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom">putEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo">putEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressFrom">resetEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressTo">resetEgressTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressFrom` <a name="putEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom"></a>

```java
public void putEgressFrom(GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

---

##### `putEgressTo` <a name="putEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo"></a>

```java
public void putEgressTo(GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.putEgressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

---

##### `resetEgressFrom` <a name="resetEgressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressFrom"></a>

```java
public void resetEgressFrom()
```

##### `resetEgressTo` <a name="resetEgressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.resetEgressTo"></a>

```java
public void resetEgressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFrom">egressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressTo">egressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFromInput">egressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressToInput">egressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies">GoogleAccessContextManagerServicePerimeterStatusEgressPolicies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressFrom`<sup>Required</sup> <a name="egressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference getEgressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFromOutputReference</a>

---

##### `egressTo`<sup>Required</sup> <a name="egressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference getEgressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressToOutputReference</a>

---

##### `egressFromInput`<sup>Optional</sup> <a name="egressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressFromInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom getEgressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressFrom</a>

---

##### `egressToInput`<sup>Optional</sup> <a name="egressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.egressToInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo getEgressToInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesEgressTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies">GoogleAccessContextManagerServicePerimeterStatusEgressPolicies</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.putSources"></a>

```java
public void putSources(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>>

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sources"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList getSources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>>

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a>>

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromSources</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>>

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>>

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectors"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>>

---

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operations"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperationsList</a>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies">GoogleAccessContextManagerServicePerimeterStatusIngressPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies">GoogleAccessContextManagerServicePerimeterStatusIngressPolicies</a>>

---


### GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom">putIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo">putIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressFrom">resetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressTo">resetIngressTo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIngressFrom` <a name="putIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom"></a>

```java
public void putIngressFrom(GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

---

##### `putIngressTo` <a name="putIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo"></a>

```java
public void putIngressTo(GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

---

##### `resetIngressFrom` <a name="resetIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressFrom"></a>

```java
public void resetIngressFrom()
```

##### `resetIngressTo` <a name="resetIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.resetIngressTo"></a>

```java
public void resetIngressTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFromInput">ingressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressToInput">ingressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies">GoogleAccessContextManagerServicePerimeterStatusIngressPolicies</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingressFrom`<sup>Required</sup> <a name="ingressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFromOutputReference</a>

---

##### `ingressTo`<sup>Required</sup> <a name="ingressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressToOutputReference</a>

---

##### `ingressFromInput`<sup>Optional</sup> <a name="ingressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressFromInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom getIngressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressFrom</a>

---

##### `ingressToInput`<sup>Optional</sup> <a name="ingressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.ingressToInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo getIngressToInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesIngressTo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies">GoogleAccessContextManagerServicePerimeterStatusIngressPolicies</a> OR com.hashicorp.cdktf.IResolvable

---


### GoogleAccessContextManagerServicePerimeterStatusOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putEgressPolicies">putEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putIngressPolicies">putIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices">putVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetAccessLevels">resetAccessLevels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetEgressPolicies">resetEgressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetIngressPolicies">resetIngressPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetRestrictedServices">resetRestrictedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetVpcAccessibleServices">resetVpcAccessibleServices</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressPolicies` <a name="putEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putEgressPolicies"></a>

```java
public void putEgressPolicies(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterStatusEgressPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putEgressPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies">GoogleAccessContextManagerServicePerimeterStatusEgressPolicies</a>>

---

##### `putIngressPolicies` <a name="putIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putIngressPolicies"></a>

```java
public void putIngressPolicies(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterStatusIngressPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putIngressPolicies.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies">GoogleAccessContextManagerServicePerimeterStatusIngressPolicies</a>>

---

##### `putVpcAccessibleServices` <a name="putVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices"></a>

```java
public void putVpcAccessibleServices(GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.putVpcAccessibleServices.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

---

##### `resetAccessLevels` <a name="resetAccessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetAccessLevels"></a>

```java
public void resetAccessLevels()
```

##### `resetEgressPolicies` <a name="resetEgressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetEgressPolicies"></a>

```java
public void resetEgressPolicies()
```

##### `resetIngressPolicies` <a name="resetIngressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetIngressPolicies"></a>

```java
public void resetIngressPolicies()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetResources"></a>

```java
public void resetResources()
```

##### `resetRestrictedServices` <a name="resetRestrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetRestrictedServices"></a>

```java
public void resetRestrictedServices()
```

##### `resetVpcAccessibleServices` <a name="resetVpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.resetVpcAccessibleServices"></a>

```java
public void resetVpcAccessibleServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.egressPolicies">egressPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.ingressPolicies">ingressPolicies</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServices">vpcAccessibleServices</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.accessLevelsInput">accessLevelsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.egressPoliciesInput">egressPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies">GoogleAccessContextManagerServicePerimeterStatusEgressPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.ingressPoliciesInput">ingressPoliciesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies">GoogleAccessContextManagerServicePerimeterStatusIngressPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServicesInput">restrictedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServicesInput">vpcAccessibleServicesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.accessLevels">accessLevels</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServices">restrictedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressPolicies`<sup>Required</sup> <a name="egressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.egressPolicies"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList getEgressPolicies();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList">GoogleAccessContextManagerServicePerimeterStatusEgressPoliciesList</a>

---

##### `ingressPolicies`<sup>Required</sup> <a name="ingressPolicies" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.ingressPolicies"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList getIngressPolicies();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList">GoogleAccessContextManagerServicePerimeterStatusIngressPoliciesList</a>

---

##### `vpcAccessibleServices`<sup>Required</sup> <a name="vpcAccessibleServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServices"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference getVpcAccessibleServices();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference</a>

---

##### `accessLevelsInput`<sup>Optional</sup> <a name="accessLevelsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.accessLevelsInput"></a>

```java
public java.util.List<java.lang.String> getAccessLevelsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `egressPoliciesInput`<sup>Optional</sup> <a name="egressPoliciesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.egressPoliciesInput"></a>

```java
public java.lang.Object getEgressPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusEgressPolicies">GoogleAccessContextManagerServicePerimeterStatusEgressPolicies</a>>

---

##### `ingressPoliciesInput`<sup>Optional</sup> <a name="ingressPoliciesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.ingressPoliciesInput"></a>

```java
public java.lang.Object getIngressPoliciesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusIngressPolicies">GoogleAccessContextManagerServicePerimeterStatusIngressPolicies</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedServicesInput`<sup>Optional</sup> <a name="restrictedServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServicesInput"></a>

```java
public java.util.List<java.lang.String> getRestrictedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcAccessibleServicesInput`<sup>Optional</sup> <a name="vpcAccessibleServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.vpcAccessibleServicesInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices getVpcAccessibleServicesInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

---

##### `accessLevels`<sup>Required</sup> <a name="accessLevels" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.accessLevels"></a>

```java
public java.util.List<java.lang.String> getAccessLevels();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedServices`<sup>Required</sup> <a name="restrictedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.restrictedServices"></a>

```java
public java.util.List<java.lang.String> getRestrictedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatus">GoogleAccessContextManagerServicePerimeterStatus</a>

---


### GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference <a name="GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference;

new GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetAllowedServices">resetAllowedServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetEnableRestriction">resetEnableRestriction</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowedServices` <a name="resetAllowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetAllowedServices"></a>

```java
public void resetAllowedServices()
```

##### `resetEnableRestriction` <a name="resetEnableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.resetEnableRestriction"></a>

```java
public void resetEnableRestriction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServicesInput">allowedServicesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestrictionInput">enableRestrictionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServices">allowedServices</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestriction">enableRestriction</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedServicesInput`<sup>Optional</sup> <a name="allowedServicesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServicesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedServicesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRestrictionInput`<sup>Optional</sup> <a name="enableRestrictionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestrictionInput"></a>

```java
public java.lang.Object getEnableRestrictionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedServices`<sup>Required</sup> <a name="allowedServices" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.allowedServices"></a>

```java
public java.util.List<java.lang.String> getAllowedServices();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableRestriction`<sup>Required</sup> <a name="enableRestriction" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.enableRestriction"></a>

```java
public java.lang.Object getEnableRestriction();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServicesOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices">GoogleAccessContextManagerServicePerimeterStatusVpcAccessibleServices</a>

---


### GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference;

new GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeter.GoogleAccessContextManagerServicePerimeterTimeouts">GoogleAccessContextManagerServicePerimeterTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



