# `googleComputeRouterNatAddress` Submodule <a name="`googleComputeRouterNatAddress` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterNatAddress <a name="GoogleComputeRouterNatAddress" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address google_compute_router_nat_address}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_nat_address.GoogleComputeRouterNatAddress;

GoogleComputeRouterNatAddress.Builder.create(Construct scope, java.lang.String id)
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
    .natIps(java.util.List<java.lang.String>)
    .router(java.lang.String)
    .routerNat(java.lang.String)
//  .drainNatIps(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleComputeRouterNatAddressTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.natIps">natIps</a></code> | <code>java.util.List<java.lang.String></code> | Self-links of NAT IPs to be used in a Nat service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which the referenced NAT service is configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.routerNat">routerNat</a></code> | <code>java.lang.String</code> | The name of the Nat service in which this address will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.drainNatIps">drainNatIps</a></code> | <code>java.util.List<java.lang.String></code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#id GoogleComputeRouterNatAddress#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#project GoogleComputeRouterNatAddress#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where the NAT service reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.natIps"></a>

- *Type:* java.util.List<java.lang.String>

Self-links of NAT IPs to be used in a Nat service.

Only valid if the referenced RouterNat
natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#nat_ips GoogleComputeRouterNatAddress#nat_ips}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.router"></a>

- *Type:* java.lang.String

The name of the Cloud Router in which the referenced NAT service is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#router GoogleComputeRouterNatAddress#router}

---

##### `routerNat`<sup>Required</sup> <a name="routerNat" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.routerNat"></a>

- *Type:* java.lang.String

The name of the Nat service in which this address will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#router_nat GoogleComputeRouterNatAddress#router_nat}

---

##### `drainNatIps`<sup>Optional</sup> <a name="drainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.drainNatIps"></a>

- *Type:* java.util.List<java.lang.String>

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#drain_nat_ips GoogleComputeRouterNatAddress#drain_nat_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#id GoogleComputeRouterNatAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#project GoogleComputeRouterNatAddress#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where the NAT service reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#region GoogleComputeRouterNatAddress#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#timeouts GoogleComputeRouterNatAddress#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetDrainNatIps">resetDrainNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.putTimeouts"></a>

```java
public void putTimeouts(GoogleComputeRouterNatAddressTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a>

---

##### `resetDrainNatIps` <a name="resetDrainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetDrainNatIps"></a>

```java
public void resetDrainNatIps()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRouterNatAddress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_nat_address.GoogleComputeRouterNatAddress;

GoogleComputeRouterNatAddress.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_nat_address.GoogleComputeRouterNatAddress;

GoogleComputeRouterNatAddress.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_nat_address.GoogleComputeRouterNatAddress;

GoogleComputeRouterNatAddress.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_nat_address.GoogleComputeRouterNatAddress;

GoogleComputeRouterNatAddress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleComputeRouterNatAddress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoogleComputeRouterNatAddress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleComputeRouterNatAddress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleComputeRouterNatAddress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterNatAddress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference">GoogleComputeRouterNatAddressTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.drainNatIpsInput">drainNatIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.natIpsInput">natIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerInput">routerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerNatInput">routerNatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.drainNatIps">drainNatIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.natIps">natIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.router">router</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerNat">routerNat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.timeouts"></a>

```java
public GoogleComputeRouterNatAddressTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference">GoogleComputeRouterNatAddressTimeoutsOutputReference</a>

---

##### `drainNatIpsInput`<sup>Optional</sup> <a name="drainNatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.drainNatIpsInput"></a>

```java
public java.util.List<java.lang.String> getDrainNatIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `natIpsInput`<sup>Optional</sup> <a name="natIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.natIpsInput"></a>

```java
public java.util.List<java.lang.String> getNatIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerInput"></a>

```java
public java.lang.String getRouterInput();
```

- *Type:* java.lang.String

---

##### `routerNatInput`<sup>Optional</sup> <a name="routerNatInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerNatInput"></a>

```java
public java.lang.String getRouterNatInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a>

---

##### `drainNatIps`<sup>Required</sup> <a name="drainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.drainNatIps"></a>

```java
public java.util.List<java.lang.String> getDrainNatIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.natIps"></a>

```java
public java.util.List<java.lang.String> getNatIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

---

##### `routerNat`<sup>Required</sup> <a name="routerNat" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.routerNat"></a>

```java
public java.lang.String getRouterNat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddress.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterNatAddressConfig <a name="GoogleComputeRouterNatAddressConfig" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_nat_address.GoogleComputeRouterNatAddressConfig;

GoogleComputeRouterNatAddressConfig.builder()
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
    .natIps(java.util.List<java.lang.String>)
    .router(java.lang.String)
    .routerNat(java.lang.String)
//  .drainNatIps(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleComputeRouterNatAddressTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.natIps">natIps</a></code> | <code>java.util.List<java.lang.String></code> | Self-links of NAT IPs to be used in a Nat service. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.router">router</a></code> | <code>java.lang.String</code> | The name of the Cloud Router in which the referenced NAT service is configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.routerNat">routerNat</a></code> | <code>java.lang.String</code> | The name of the Nat service in which this address will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.drainNatIps">drainNatIps</a></code> | <code>java.util.List<java.lang.String></code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#id GoogleComputeRouterNatAddress#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#project GoogleComputeRouterNatAddress#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where the NAT service reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.natIps"></a>

```java
public java.util.List<java.lang.String> getNatIps();
```

- *Type:* java.util.List<java.lang.String>

Self-links of NAT IPs to be used in a Nat service.

Only valid if the referenced RouterNat
natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#nat_ips GoogleComputeRouterNatAddress#nat_ips}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.router"></a>

```java
public java.lang.String getRouter();
```

- *Type:* java.lang.String

The name of the Cloud Router in which the referenced NAT service is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#router GoogleComputeRouterNatAddress#router}

---

##### `routerNat`<sup>Required</sup> <a name="routerNat" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.routerNat"></a>

```java
public java.lang.String getRouterNat();
```

- *Type:* java.lang.String

The name of the Nat service in which this address will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#router_nat GoogleComputeRouterNatAddress#router_nat}

---

##### `drainNatIps`<sup>Optional</sup> <a name="drainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.drainNatIps"></a>

```java
public java.util.List<java.lang.String> getDrainNatIps();
```

- *Type:* java.util.List<java.lang.String>

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#drain_nat_ips GoogleComputeRouterNatAddress#drain_nat_ips}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#id GoogleComputeRouterNatAddress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#project GoogleComputeRouterNatAddress#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where the NAT service reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#region GoogleComputeRouterNatAddress#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressConfig.property.timeouts"></a>

```java
public GoogleComputeRouterNatAddressTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#timeouts GoogleComputeRouterNatAddress#timeouts}

---

### GoogleComputeRouterNatAddressTimeouts <a name="GoogleComputeRouterNatAddressTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_nat_address.GoogleComputeRouterNatAddressTimeouts;

GoogleComputeRouterNatAddressTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#create GoogleComputeRouterNatAddress#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#delete GoogleComputeRouterNatAddress#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#update GoogleComputeRouterNatAddress#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#create GoogleComputeRouterNatAddress#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#delete GoogleComputeRouterNatAddress#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_compute_router_nat_address#update GoogleComputeRouterNatAddress#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterNatAddressTimeoutsOutputReference <a name="GoogleComputeRouterNatAddressTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google_beta.google_compute_router_nat_address.GoogleComputeRouterNatAddressTimeoutsOutputReference;

new GoogleComputeRouterNatAddressTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google-beta.googleComputeRouterNatAddress.GoogleComputeRouterNatAddressTimeouts">GoogleComputeRouterNatAddressTimeouts</a>

---



