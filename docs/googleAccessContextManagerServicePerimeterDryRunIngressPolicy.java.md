# `googleAccessContextManagerServicePerimeterDryRunIngressPolicy` Submodule <a name="`googleAccessContextManagerServicePerimeterDryRunIngressPolicy` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy google_access_context_manager_service_perimeter_dry_run_ingress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .perimeter(java.lang.String)
//  .id(java.lang.String)
//  .ingressFrom(GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom)
//  .ingressTo(GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo)
//  .timeouts(GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts)
//  .title(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.perimeter">perimeter</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#id GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | ingress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.perimeter"></a>

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#perimeter GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#perimeter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#id GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressFrom`<sup>Optional</sup> <a name="ingressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.ingressFrom"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_from GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_from}

---

##### `ingressTo`<sup>Optional</sup> <a name="ingressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.ingressTo"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_to GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_to}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#timeouts GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.Initializer.parameter.title"></a>

- *Type:* java.lang.String

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#title GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#title}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressFrom">putIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressTo">putIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressFrom">resetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressTo">resetIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngressFrom` <a name="putIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressFrom"></a>

```java
public void putIngressFrom(GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

---

##### `putIngressTo` <a name="putIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressTo"></a>

```java
public void putIngressTo(GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putTimeouts"></a>

```java
public void putTimeouts(GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIngressFrom` <a name="resetIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressFrom"></a>

```java
public void resetIngressFrom()
```

##### `resetIngressTo` <a name="resetIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetIngressTo"></a>

```java
public void resetIngressTo()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.resetTitle"></a>

```java
public void resetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFromInput">ingressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressToInput">ingressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeterInput">perimeterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeter">perimeter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.accessPolicyId"></a>

```java
public java.lang.String getAccessPolicyId();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `ingressFrom`<sup>Required</sup> <a name="ingressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference</a>

---

##### `ingressTo`<sup>Required</sup> <a name="ingressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeouts"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ingressFromInput`<sup>Optional</sup> <a name="ingressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressFromInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom getIngressFromInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

---

##### `ingressToInput`<sup>Optional</sup> <a name="ingressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.ingressToInput"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo getIngressToInput();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

---

##### `perimeterInput`<sup>Optional</sup> <a name="perimeterInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeterInput"></a>

```java
public java.lang.String getPerimeterInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.perimeter"></a>

```java
public java.lang.String getPerimeter();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.builder()
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
    .perimeter(java.lang.String)
//  .id(java.lang.String)
//  .ingressFrom(GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom)
//  .ingressTo(GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo)
//  .timeouts(GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts)
//  .title(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.perimeter">perimeter</a></code> | <code>java.lang.String</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#id GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | ingress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.title">title</a></code> | <code>java.lang.String</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.perimeter"></a>

```java
public java.lang.String getPerimeter();
```

- *Type:* java.lang.String

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#perimeter GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#perimeter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#id GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressFrom`<sup>Optional</sup> <a name="ingressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressFrom"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom getIngressFrom();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_from GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_from}

---

##### `ingressTo`<sup>Optional</sup> <a name="ingressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.ingressTo"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo getIngressTo();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#ingress_to GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#ingress_to}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.timeouts"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#timeouts GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyConfig.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#title GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#title}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.builder()
//  .identities(java.util.List<java.lang.String>)
//  .identityType(java.lang.String)
//  .sources(IResolvable)
//  .sources(java.util.List<GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identityType">identityType</a></code> | <code>java.lang.String</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.sources">sources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>></code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#identities GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#identity_type GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom.property.sources"></a>

```java
public java.lang.Object getSources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>>

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#sources GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#sources}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.builder()
//  .accessLevel(java.lang.String)
//  .resource(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.resource">resource</a></code> | <code>java.lang.String</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.accessLevel"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#access_level GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources.property.resource"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#resource GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#resource}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.builder()
//  .operations(IResolvable)
//  .operations(java.util.List<GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations>)
//  .resources(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.operations">operations</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>></code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.operations"></a>

```java
public java.lang.Object getOperations();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#operations GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo.property.resources"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#resources GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#resources}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.builder()
//  .methodSelectors(IResolvable)
//  .methodSelectors(java.util.List<GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors>)
//  .serviceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>></code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.methodSelectors"></a>

```java
public java.lang.Object getMethodSelectors();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>>

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#method_selectors GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#service_name GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#service_name}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.builder()
//  .method(java.lang.String)
//  .permission(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>java.lang.String</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>java.lang.String</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#method GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#permission GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#permission}

---

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts;

GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#create GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#create GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_access_context_manager_service_perimeter_dry_run_ingress_policy#delete GoogleAccessContextManagerServicePerimeterDryRunIngressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference;

new GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.putSources"></a>

```java
public void putSources(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>>

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentities"></a>

```java
public void resetIdentities()
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetIdentityType"></a>

```java
public void resetIdentityType()
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.resetSources"></a>

```java
public void resetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identities">identities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityType">identityType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sources"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList getSources();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identitiesInput"></a>

```java
public java.util.List<java.lang.String> getIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityTypeInput"></a>

```java
public java.lang.String getIdentityTypeInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.sourcesInput"></a>

```java
public java.lang.Object getSourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>>

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identities"></a>

```java
public java.util.List<java.lang.String> getIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.identityType"></a>

```java
public java.lang.String getIdentityType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList;

new GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference;

new GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resourceInput"></a>

```java
public java.lang.String getResourceInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.resource"></a>

```java
public java.lang.String getResource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressFromSources</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList;

new GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList;

new GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.get"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference;

new GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```java
public void resetMethod()
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```java
public void resetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```java
public java.lang.String getMethodInput();
```

- *Type:* java.lang.String

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```java
public java.lang.String getPermissionInput();
```

- *Type:* java.lang.String

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```java
public java.lang.String getMethod();
```

- *Type:* java.lang.String

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```java
public java.lang.String getPermission();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference;

new GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.putMethodSelectors"></a>

```java
public void putMethodSelectors(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>>

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors"></a>

```java
public void resetMethodSelectors()
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectors"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList getMethodSelectors();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```java
public java.lang.Object getMethodSelectorsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsMethodSelectors</a>>

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference;

new GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.putOperations"></a>

```java
public void putOperations(IResolvable OR java.util.List<GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>>

---

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetOperations"></a>

```java
public void resetOperations()
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.resetResources"></a>

```java
public void resetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resources">resources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operations"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList getOperations();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperationsList</a>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.operationsInput"></a>

```java
public java.lang.Object getOperationsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOperations</a>>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resourcesInput"></a>

```java
public java.util.List<java.lang.String> getResourcesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.resources"></a>

```java
public java.util.List<java.lang.String> getResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressToOutputReference.property.internalValue"></a>

```java
public GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyIngressTo</a>

---


### GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_access_context_manager_service_perimeter_dry_run_ingress_policy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference;

new GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterDryRunIngressPolicy.GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterDryRunIngressPolicyTimeouts</a>

---



