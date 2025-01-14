# `googleComputeRouterNat` Submodule <a name="`googleComputeRouterNat` Submodule" id="@cdktf/provider-google-beta.googleComputeRouterNat"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRouterNat <a name="GoogleComputeRouterNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat google_compute_router_nat}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

new googleComputeRouterNat.GoogleComputeRouterNat(scope: Construct, id: string, config: GoogleComputeRouterNatConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig">GoogleComputeRouterNatConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig">GoogleComputeRouterNatConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork">putSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetAutoNetworkTier">resetAutoNetworkTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetDrainNatIps">resetDrainNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableDynamicPortAllocation">resetEnableDynamicPortAllocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableEndpointIndependentMapping">resetEnableEndpointIndependentMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEndpointTypes">resetEndpointTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetIcmpIdleTimeoutSec">resetIcmpIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetInitialNatIps">resetInitialNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMaxPortsPerVm">resetMaxPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMinPortsPerVm">resetMinPortsPerVm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIpAllocateOption">resetNatIpAllocateOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIps">resetNatIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRules">resetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpEstablishedIdleTimeoutSec">resetTcpEstablishedIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTimeWaitTimeoutSec">resetTcpTimeWaitTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTransitoryIdleTimeoutSec">resetTcpTransitoryIdleTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetUdpIdleTimeoutSec">resetUdpIdleTimeoutSec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig"></a>

```typescript
public putLogConfig(value: GoogleComputeRouterNatLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---

##### `putRules` <a name="putRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules"></a>

```typescript
public putRules(value: IResolvable | GoogleComputeRouterNatRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>[]

---

##### `putSubnetwork` <a name="putSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork"></a>

```typescript
public putSubnetwork(value: IResolvable | GoogleComputeRouterNatSubnetwork[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putSubnetwork.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRouterNatTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

---

##### `resetAutoNetworkTier` <a name="resetAutoNetworkTier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetAutoNetworkTier"></a>

```typescript
public resetAutoNetworkTier(): void
```

##### `resetDrainNatIps` <a name="resetDrainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetDrainNatIps"></a>

```typescript
public resetDrainNatIps(): void
```

##### `resetEnableDynamicPortAllocation` <a name="resetEnableDynamicPortAllocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableDynamicPortAllocation"></a>

```typescript
public resetEnableDynamicPortAllocation(): void
```

##### `resetEnableEndpointIndependentMapping` <a name="resetEnableEndpointIndependentMapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEnableEndpointIndependentMapping"></a>

```typescript
public resetEnableEndpointIndependentMapping(): void
```

##### `resetEndpointTypes` <a name="resetEndpointTypes" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetEndpointTypes"></a>

```typescript
public resetEndpointTypes(): void
```

##### `resetIcmpIdleTimeoutSec` <a name="resetIcmpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetIcmpIdleTimeoutSec"></a>

```typescript
public resetIcmpIdleTimeoutSec(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialNatIps` <a name="resetInitialNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetInitialNatIps"></a>

```typescript
public resetInitialNatIps(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetMaxPortsPerVm` <a name="resetMaxPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMaxPortsPerVm"></a>

```typescript
public resetMaxPortsPerVm(): void
```

##### `resetMinPortsPerVm` <a name="resetMinPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetMinPortsPerVm"></a>

```typescript
public resetMinPortsPerVm(): void
```

##### `resetNatIpAllocateOption` <a name="resetNatIpAllocateOption" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIpAllocateOption"></a>

```typescript
public resetNatIpAllocateOption(): void
```

##### `resetNatIps` <a name="resetNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetNatIps"></a>

```typescript
public resetNatIps(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRules` <a name="resetRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetRules"></a>

```typescript
public resetRules(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```

##### `resetTcpEstablishedIdleTimeoutSec` <a name="resetTcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpEstablishedIdleTimeoutSec"></a>

```typescript
public resetTcpEstablishedIdleTimeoutSec(): void
```

##### `resetTcpTimeWaitTimeoutSec` <a name="resetTcpTimeWaitTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTimeWaitTimeoutSec"></a>

```typescript
public resetTcpTimeWaitTimeoutSec(): void
```

##### `resetTcpTransitoryIdleTimeoutSec` <a name="resetTcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTcpTransitoryIdleTimeoutSec"></a>

```typescript
public resetTcpTransitoryIdleTimeoutSec(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUdpIdleTimeoutSec` <a name="resetUdpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.resetUdpIdleTimeoutSec"></a>

```typescript
public resetUdpIdleTimeoutSec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRouterNat resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

googleComputeRouterNat.GoogleComputeRouterNat.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRouterNat resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRouterNat to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRouterNat that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRouterNat to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference">GoogleComputeRouterNatLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList">GoogleComputeRouterNatRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetwork">subnetwork</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList">GoogleComputeRouterNatSubnetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference">GoogleComputeRouterNatTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTierInput">autoNetworkTierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIpsInput">drainNatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocationInput">enableDynamicPortAllocationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMappingInput">enableEndpointIndependentMappingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypesInput">endpointTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSecInput">icmpIdleTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIpsInput">initialNatIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVmInput">maxPortsPerVmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVmInput">minPortsPerVmInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOptionInput">natIpAllocateOptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpsInput">natIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rulesInput">rulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput">sourceSubnetworkIpRangesToNatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetworkInput">subnetworkInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput">tcpEstablishedIdleTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSecInput">tcpTimeWaitTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput">tcpTransitoryIdleTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSecInput">udpIdleTimeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTier">autoNetworkTier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIps">drainNatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocation">enableDynamicPortAllocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMapping">enableEndpointIndependentMapping</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypes">endpointTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSec">icmpIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIps">initialNatIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVm">maxPortsPerVm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVm">minPortsPerVm</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOption">natIpAllocateOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIps">natIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat">sourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec">tcpEstablishedIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec">tcpTimeWaitTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec">tcpTransitoryIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSec">udpIdleTimeoutSec</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleComputeRouterNatLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference">GoogleComputeRouterNatLogConfigOutputReference</a>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rules"></a>

```typescript
public readonly rules: GoogleComputeRouterNatRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList">GoogleComputeRouterNatRulesList</a>

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetwork"></a>

```typescript
public readonly subnetwork: GoogleComputeRouterNatSubnetworkList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList">GoogleComputeRouterNatSubnetworkList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRouterNatTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference">GoogleComputeRouterNatTimeoutsOutputReference</a>

---

##### `autoNetworkTierInput`<sup>Optional</sup> <a name="autoNetworkTierInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTierInput"></a>

```typescript
public readonly autoNetworkTierInput: string;
```

- *Type:* string

---

##### `drainNatIpsInput`<sup>Optional</sup> <a name="drainNatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIpsInput"></a>

```typescript
public readonly drainNatIpsInput: string[];
```

- *Type:* string[]

---

##### `enableDynamicPortAllocationInput`<sup>Optional</sup> <a name="enableDynamicPortAllocationInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocationInput"></a>

```typescript
public readonly enableDynamicPortAllocationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableEndpointIndependentMappingInput`<sup>Optional</sup> <a name="enableEndpointIndependentMappingInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMappingInput"></a>

```typescript
public readonly enableEndpointIndependentMappingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointTypesInput`<sup>Optional</sup> <a name="endpointTypesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypesInput"></a>

```typescript
public readonly endpointTypesInput: string[];
```

- *Type:* string[]

---

##### `icmpIdleTimeoutSecInput`<sup>Optional</sup> <a name="icmpIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSecInput"></a>

```typescript
public readonly icmpIdleTimeoutSecInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialNatIpsInput`<sup>Optional</sup> <a name="initialNatIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIpsInput"></a>

```typescript
public readonly initialNatIpsInput: string[];
```

- *Type:* string[]

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: GoogleComputeRouterNatLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---

##### `maxPortsPerVmInput`<sup>Optional</sup> <a name="maxPortsPerVmInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVmInput"></a>

```typescript
public readonly maxPortsPerVmInput: number;
```

- *Type:* number

---

##### `minPortsPerVmInput`<sup>Optional</sup> <a name="minPortsPerVmInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVmInput"></a>

```typescript
public readonly minPortsPerVmInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `natIpAllocateOptionInput`<sup>Optional</sup> <a name="natIpAllocateOptionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOptionInput"></a>

```typescript
public readonly natIpAllocateOptionInput: string;
```

- *Type:* string

---

##### `natIpsInput`<sup>Optional</sup> <a name="natIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpsInput"></a>

```typescript
public readonly natIpsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.rulesInput"></a>

```typescript
public readonly rulesInput: IResolvable | GoogleComputeRouterNatRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>[]

---

##### `sourceSubnetworkIpRangesToNatInput`<sup>Optional</sup> <a name="sourceSubnetworkIpRangesToNatInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNatInput"></a>

```typescript
public readonly sourceSubnetworkIpRangesToNatInput: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: IResolvable | GoogleComputeRouterNatSubnetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>[]

---

##### `tcpEstablishedIdleTimeoutSecInput`<sup>Optional</sup> <a name="tcpEstablishedIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSecInput"></a>

```typescript
public readonly tcpEstablishedIdleTimeoutSecInput: number;
```

- *Type:* number

---

##### `tcpTimeWaitTimeoutSecInput`<sup>Optional</sup> <a name="tcpTimeWaitTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSecInput"></a>

```typescript
public readonly tcpTimeWaitTimeoutSecInput: number;
```

- *Type:* number

---

##### `tcpTransitoryIdleTimeoutSecInput`<sup>Optional</sup> <a name="tcpTransitoryIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSecInput"></a>

```typescript
public readonly tcpTransitoryIdleTimeoutSecInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRouterNatTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `udpIdleTimeoutSecInput`<sup>Optional</sup> <a name="udpIdleTimeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSecInput"></a>

```typescript
public readonly udpIdleTimeoutSecInput: number;
```

- *Type:* number

---

##### `autoNetworkTier`<sup>Required</sup> <a name="autoNetworkTier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.autoNetworkTier"></a>

```typescript
public readonly autoNetworkTier: string;
```

- *Type:* string

---

##### `drainNatIps`<sup>Required</sup> <a name="drainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.drainNatIps"></a>

```typescript
public readonly drainNatIps: string[];
```

- *Type:* string[]

---

##### `enableDynamicPortAllocation`<sup>Required</sup> <a name="enableDynamicPortAllocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableDynamicPortAllocation"></a>

```typescript
public readonly enableDynamicPortAllocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableEndpointIndependentMapping`<sup>Required</sup> <a name="enableEndpointIndependentMapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.enableEndpointIndependentMapping"></a>

```typescript
public readonly enableEndpointIndependentMapping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointTypes`<sup>Required</sup> <a name="endpointTypes" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.endpointTypes"></a>

```typescript
public readonly endpointTypes: string[];
```

- *Type:* string[]

---

##### `icmpIdleTimeoutSec`<sup>Required</sup> <a name="icmpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.icmpIdleTimeoutSec"></a>

```typescript
public readonly icmpIdleTimeoutSec: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialNatIps`<sup>Required</sup> <a name="initialNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.initialNatIps"></a>

```typescript
public readonly initialNatIps: string[];
```

- *Type:* string[]

---

##### `maxPortsPerVm`<sup>Required</sup> <a name="maxPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.maxPortsPerVm"></a>

```typescript
public readonly maxPortsPerVm: number;
```

- *Type:* number

---

##### `minPortsPerVm`<sup>Required</sup> <a name="minPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.minPortsPerVm"></a>

```typescript
public readonly minPortsPerVm: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `natIpAllocateOption`<sup>Required</sup> <a name="natIpAllocateOption" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIpAllocateOption"></a>

```typescript
public readonly natIpAllocateOption: string;
```

- *Type:* string

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.natIps"></a>

```typescript
public readonly natIps: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `sourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="sourceSubnetworkIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.sourceSubnetworkIpRangesToNat"></a>

```typescript
public readonly sourceSubnetworkIpRangesToNat: string;
```

- *Type:* string

---

##### `tcpEstablishedIdleTimeoutSec`<sup>Required</sup> <a name="tcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpEstablishedIdleTimeoutSec"></a>

```typescript
public readonly tcpEstablishedIdleTimeoutSec: number;
```

- *Type:* number

---

##### `tcpTimeWaitTimeoutSec`<sup>Required</sup> <a name="tcpTimeWaitTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTimeWaitTimeoutSec"></a>

```typescript
public readonly tcpTimeWaitTimeoutSec: number;
```

- *Type:* number

---

##### `tcpTransitoryIdleTimeoutSec`<sup>Required</sup> <a name="tcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tcpTransitoryIdleTimeoutSec"></a>

```typescript
public readonly tcpTransitoryIdleTimeoutSec: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `udpIdleTimeoutSec`<sup>Required</sup> <a name="udpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.udpIdleTimeoutSec"></a>

```typescript
public readonly udpIdleTimeoutSec: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNat.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRouterNatConfig <a name="GoogleComputeRouterNatConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

const googleComputeRouterNatConfig: googleComputeRouterNat.GoogleComputeRouterNatConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.name">name</a></code> | <code>string</code> | Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.router">router</a></code> | <code>string</code> | The name of the Cloud Router in which this NAT will be configured. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat">sourceSubnetworkIpRangesToNat</a></code> | <code>string</code> | How NAT should be configured per Subnetwork. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.autoNetworkTier">autoNetworkTier</a></code> | <code>string</code> | The network tier to use when automatically reserving NAT IP addresses. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.drainNatIps">drainNatIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableDynamicPortAllocation">enableDynamicPortAllocation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable Dynamic Port Allocation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableEndpointIndependentMapping">enableEndpointIndependentMapping</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.endpointTypes">endpointTypes</a></code> | <code>string[]</code> | Specifies the endpoint Types supported by the NAT Gateway. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.icmpIdleTimeoutSec">icmpIdleTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.initialNatIps">initialNatIps</a></code> | <code>string[]</code> | Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.maxPortsPerVm">maxPortsPerVm</a></code> | <code>number</code> | Maximum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.minPortsPerVm">minPortsPerVm</a></code> | <code>number</code> | Minimum number of ports allocated to a VM from this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIpAllocateOption">natIpAllocateOption</a></code> | <code>string</code> | How external IPs should be allocated for this NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIps">natIps</a></code> | <code>string[]</code> | Self-links of NAT IPs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.region">region</a></code> | <code>string</code> | Region where the router and NAT reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.rules">rules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>[]</code> | rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.subnetwork">subnetwork</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>[]</code> | subnetwork block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec">tcpEstablishedIdleTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec">tcpTimeWaitTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec">tcpTransitoryIdleTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.type">type</a></code> | <code>string</code> | Indicates whether this NAT is used for public or private IP translation. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.udpIdleTimeoutSec">udpIdleTimeoutSec</a></code> | <code>number</code> | Timeout (in seconds) for UDP connections. Defaults to 30s if not set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the NAT service. The name must be 1-63 characters long and comply with RFC1035.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#name GoogleComputeRouterNat#name}

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

The name of the Cloud Router in which this NAT will be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#router GoogleComputeRouterNat#router}

---

##### `sourceSubnetworkIpRangesToNat`<sup>Required</sup> <a name="sourceSubnetworkIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.sourceSubnetworkIpRangesToNat"></a>

```typescript
public readonly sourceSubnetworkIpRangesToNat: string;
```

- *Type:* string

How NAT should be configured per Subnetwork.

If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#source_subnetwork_ip_ranges_to_nat GoogleComputeRouterNat#source_subnetwork_ip_ranges_to_nat}

---

##### `autoNetworkTier`<sup>Optional</sup> <a name="autoNetworkTier" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.autoNetworkTier"></a>

```typescript
public readonly autoNetworkTier: string;
```

- *Type:* string

The network tier to use when automatically reserving NAT IP addresses.

Must be one of: PREMIUM, STANDARD. If not specified, then the current
project-level default tier is used. Possible values: ["PREMIUM", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#auto_network_tier GoogleComputeRouterNat#auto_network_tier}

---

##### `drainNatIps`<sup>Optional</sup> <a name="drainNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.drainNatIps"></a>

```typescript
public readonly drainNatIps: string[];
```

- *Type:* string[]

A list of URLs of the IP resources to be drained.

These IPs must be
valid static external IPs that have been assigned to the NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#drain_nat_ips GoogleComputeRouterNat#drain_nat_ips}

---

##### `enableDynamicPortAllocation`<sup>Optional</sup> <a name="enableDynamicPortAllocation" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableDynamicPortAllocation"></a>

```typescript
public readonly enableDynamicPortAllocation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable Dynamic Port Allocation.

If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#enable_dynamic_port_allocation GoogleComputeRouterNat#enable_dynamic_port_allocation}

---

##### `enableEndpointIndependentMapping`<sup>Optional</sup> <a name="enableEndpointIndependentMapping" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.enableEndpointIndependentMapping"></a>

```typescript
public readonly enableEndpointIndependentMapping: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable endpoint independent mapping. For more information see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#enable_endpoint_independent_mapping GoogleComputeRouterNat#enable_endpoint_independent_mapping}

---

##### `endpointTypes`<sup>Optional</sup> <a name="endpointTypes" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.endpointTypes"></a>

```typescript
public readonly endpointTypes: string[];
```

- *Type:* string[]

Specifies the endpoint Types supported by the NAT Gateway.

Supported values include:
      'ENDPOINT_TYPE_VM', 'ENDPOINT_TYPE_SWG',
      'ENDPOINT_TYPE_MANAGED_PROXY_LB'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#endpoint_types GoogleComputeRouterNat#endpoint_types}

---

##### `icmpIdleTimeoutSec`<sup>Optional</sup> <a name="icmpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.icmpIdleTimeoutSec"></a>

```typescript
public readonly icmpIdleTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#icmp_idle_timeout_sec GoogleComputeRouterNat#icmp_idle_timeout_sec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#id GoogleComputeRouterNat#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialNatIps`<sup>Optional</sup> <a name="initialNatIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.initialNatIps"></a>

```typescript
public readonly initialNatIps: string[];
```

- *Type:* string[]

Self-links of NAT IPs to be used as initial value for creation alongside a RouterNatAddress resource.

Conflicts with natIps and drainNatIps. Only valid if natIpAllocateOption is set to MANUAL_ONLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#initial_nat_ips GoogleComputeRouterNat#initial_nat_ips}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleComputeRouterNatLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#log_config GoogleComputeRouterNat#log_config}

---

##### `maxPortsPerVm`<sup>Optional</sup> <a name="maxPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.maxPortsPerVm"></a>

```typescript
public readonly maxPortsPerVm: number;
```

- *Type:* number

Maximum number of ports allocated to a VM from this NAT.

This field can only be set when enableDynamicPortAllocation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#max_ports_per_vm GoogleComputeRouterNat#max_ports_per_vm}

---

##### `minPortsPerVm`<sup>Optional</sup> <a name="minPortsPerVm" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.minPortsPerVm"></a>

```typescript
public readonly minPortsPerVm: number;
```

- *Type:* number

Minimum number of ports allocated to a VM from this NAT.

Defaults to 64 for static port allocation and 32 dynamic port allocation if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#min_ports_per_vm GoogleComputeRouterNat#min_ports_per_vm}

---

##### `natIpAllocateOption`<sup>Optional</sup> <a name="natIpAllocateOption" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIpAllocateOption"></a>

```typescript
public readonly natIpAllocateOption: string;
```

- *Type:* string

How external IPs should be allocated for this NAT.

Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#nat_ip_allocate_option GoogleComputeRouterNat#nat_ip_allocate_option}

---

##### `natIps`<sup>Optional</sup> <a name="natIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.natIps"></a>

```typescript
public readonly natIps: string[];
```

- *Type:* string[]

Self-links of NAT IPs.

Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
If this field is used alongside with a count created list of address resources 'google_compute_address.foobar.*.self_link',
the access level resource for the address resource must have a 'lifecycle' block with 'create_before_destroy = true' so
the number of resources can be increased/decreased without triggering the 'resourceInUseByAnotherResource' error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#nat_ips GoogleComputeRouterNat#nat_ips}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#project GoogleComputeRouterNat#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where the router and NAT reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#region GoogleComputeRouterNat#region}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.rules"></a>

```typescript
public readonly rules: IResolvable | GoogleComputeRouterNatRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>[]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#rules GoogleComputeRouterNat#rules}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.subnetwork"></a>

```typescript
public readonly subnetwork: IResolvable | GoogleComputeRouterNatSubnetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>[]

subnetwork block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#subnetwork GoogleComputeRouterNat#subnetwork}

---

##### `tcpEstablishedIdleTimeoutSec`<sup>Optional</sup> <a name="tcpEstablishedIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpEstablishedIdleTimeoutSec"></a>

```typescript
public readonly tcpEstablishedIdleTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for TCP established connections. Defaults to 1200s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#tcp_established_idle_timeout_sec GoogleComputeRouterNat#tcp_established_idle_timeout_sec}

---

##### `tcpTimeWaitTimeoutSec`<sup>Optional</sup> <a name="tcpTimeWaitTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTimeWaitTimeoutSec"></a>

```typescript
public readonly tcpTimeWaitTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for TCP connections that are in TIME_WAIT state. Defaults to 120s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#tcp_time_wait_timeout_sec GoogleComputeRouterNat#tcp_time_wait_timeout_sec}

---

##### `tcpTransitoryIdleTimeoutSec`<sup>Optional</sup> <a name="tcpTransitoryIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.tcpTransitoryIdleTimeoutSec"></a>

```typescript
public readonly tcpTransitoryIdleTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for TCP transitory connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#tcp_transitory_idle_timeout_sec GoogleComputeRouterNat#tcp_transitory_idle_timeout_sec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRouterNatTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#timeouts GoogleComputeRouterNat#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Indicates whether this NAT is used for public or private IP translation.

If unspecified, it defaults to PUBLIC.
If 'PUBLIC' NAT used for public IP translation.
If 'PRIVATE' NAT used for private IP translation. Default value: "PUBLIC" Possible values: ["PUBLIC", "PRIVATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#type GoogleComputeRouterNat#type}

---

##### `udpIdleTimeoutSec`<sup>Optional</sup> <a name="udpIdleTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatConfig.property.udpIdleTimeoutSec"></a>

```typescript
public readonly udpIdleTimeoutSec: number;
```

- *Type:* number

Timeout (in seconds) for UDP connections. Defaults to 30s if not set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#udp_idle_timeout_sec GoogleComputeRouterNat#udp_idle_timeout_sec}

---

### GoogleComputeRouterNatLogConfig <a name="GoogleComputeRouterNatLogConfig" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

const googleComputeRouterNatLogConfig: googleComputeRouterNat.GoogleComputeRouterNatLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not to export logs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.filter">filter</a></code> | <code>string</code> | Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not to export logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#enable GoogleComputeRouterNat#enable}

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#filter GoogleComputeRouterNat#filter}

---

### GoogleComputeRouterNatRules <a name="GoogleComputeRouterNatRules" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

const googleComputeRouterNatRules: googleComputeRouterNat.GoogleComputeRouterNatRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.match">match</a></code> | <code>string</code> | CEL expression that specifies the match condition that egress traffic from a VM is evaluated against. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | An integer uniquely identifying a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.description">description</a></code> | <code>string</code> | An optional description of this rule. |

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

CEL expression that specifies the match condition that egress traffic from a VM is evaluated against.

If it evaluates to true, the corresponding action is enforced.

The following examples are valid match expressions for public NAT:

"inIpRange(destination.ip, '1.1.0.0/16') || inIpRange(destination.ip, '2.2.0.0/16')"

"destination.ip == '1.1.0.1' || destination.ip == '8.8.8.8'"

The following example is a valid match expression for private NAT:

"nexthop.hub == 'https://networkconnectivity.googleapis.com/v1alpha1/projects/my-project/global/hub/hub-1'"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#match GoogleComputeRouterNat#match}

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

An integer uniquely identifying a rule in the list.

The rule number must be a positive value between 0 and 65000, and must be unique among rules within a NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#rule_number GoogleComputeRouterNat#rule_number}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.action"></a>

```typescript
public readonly action: GoogleComputeRouterNatRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#action GoogleComputeRouterNat#action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#description GoogleComputeRouterNat#description}

---

### GoogleComputeRouterNatRulesAction <a name="GoogleComputeRouterNatRulesAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

const googleComputeRouterNatRulesAction: googleComputeRouterNat.GoogleComputeRouterNatRulesAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveIps">sourceNatActiveIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources used for this NAT rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveRanges">sourceNatActiveRanges</a></code> | <code>string[]</code> | A list of URLs of the subnetworks used as source ranges for this NAT Rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainIps">sourceNatDrainIps</a></code> | <code>string[]</code> | A list of URLs of the IP resources to be drained. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainRanges">sourceNatDrainRanges</a></code> | <code>string[]</code> | A list of URLs of subnetworks representing source ranges to be drained. |

---

##### `sourceNatActiveIps`<sup>Optional</sup> <a name="sourceNatActiveIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveIps"></a>

```typescript
public readonly sourceNatActiveIps: string[];
```

- *Type:* string[]

A list of URLs of the IP resources used for this NAT rule.

These IP addresses must be valid static external IP addresses assigned to the project.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#source_nat_active_ips GoogleComputeRouterNat#source_nat_active_ips}

---

##### `sourceNatActiveRanges`<sup>Optional</sup> <a name="sourceNatActiveRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatActiveRanges"></a>

```typescript
public readonly sourceNatActiveRanges: string[];
```

- *Type:* string[]

A list of URLs of the subnetworks used as source ranges for this NAT Rule.

These subnetworks must have purpose set to PRIVATE_NAT.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#source_nat_active_ranges GoogleComputeRouterNat#source_nat_active_ranges}

---

##### `sourceNatDrainIps`<sup>Optional</sup> <a name="sourceNatDrainIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainIps"></a>

```typescript
public readonly sourceNatDrainIps: string[];
```

- *Type:* string[]

A list of URLs of the IP resources to be drained.

These IPs must be valid static external IPs that have been assigned to the NAT.
These IPs should be used for updating/patching a NAT rule only.
This field is used for public NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#source_nat_drain_ips GoogleComputeRouterNat#source_nat_drain_ips}

---

##### `sourceNatDrainRanges`<sup>Optional</sup> <a name="sourceNatDrainRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction.property.sourceNatDrainRanges"></a>

```typescript
public readonly sourceNatDrainRanges: string[];
```

- *Type:* string[]

A list of URLs of subnetworks representing source ranges to be drained.

This is only supported on patch/update, and these subnetworks must have previously been used as active ranges in this NAT Rule.
This field is used for private NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#source_nat_drain_ranges GoogleComputeRouterNat#source_nat_drain_ranges}

---

### GoogleComputeRouterNatSubnetwork <a name="GoogleComputeRouterNatSubnetwork" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

const googleComputeRouterNatSubnetwork: googleComputeRouterNat.GoogleComputeRouterNatSubnetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.name">name</a></code> | <code>string</code> | Self-link of subnetwork to NAT. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.sourceIpRangesToNat">sourceIpRangesToNat</a></code> | <code>string[]</code> | List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.secondaryIpRangeNames">secondaryIpRangeNames</a></code> | <code>string[]</code> | List of the secondary ranges of the subnetwork that are allowed to use NAT. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Self-link of subnetwork to NAT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#name GoogleComputeRouterNat#name}

---

##### `sourceIpRangesToNat`<sup>Required</sup> <a name="sourceIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.sourceIpRangesToNat"></a>

```typescript
public readonly sourceIpRangesToNat: string[];
```

- *Type:* string[]

List of options for which source IPs in the subnetwork should have NAT enabled. Supported values include: 'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES', 'PRIMARY_IP_RANGE'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#source_ip_ranges_to_nat GoogleComputeRouterNat#source_ip_ranges_to_nat}

---

##### `secondaryIpRangeNames`<sup>Optional</sup> <a name="secondaryIpRangeNames" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork.property.secondaryIpRangeNames"></a>

```typescript
public readonly secondaryIpRangeNames: string[];
```

- *Type:* string[]

List of the secondary ranges of the subnetwork that are allowed to use NAT.

This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#secondary_ip_range_names GoogleComputeRouterNat#secondary_ip_range_names}

---

### GoogleComputeRouterNatTimeouts <a name="GoogleComputeRouterNatTimeouts" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

const googleComputeRouterNatTimeouts: googleComputeRouterNat.GoogleComputeRouterNatTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#create GoogleComputeRouterNat#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#delete GoogleComputeRouterNat#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#update GoogleComputeRouterNat#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#create GoogleComputeRouterNat#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#delete GoogleComputeRouterNat#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/resources/google_compute_router_nat#update GoogleComputeRouterNat#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRouterNatLogConfigOutputReference <a name="GoogleComputeRouterNatLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

new googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRouterNatLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatLogConfig">GoogleComputeRouterNatLogConfig</a>

---


### GoogleComputeRouterNatRulesActionOutputReference <a name="GoogleComputeRouterNatRulesActionOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

new googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps">resetSourceNatActiveIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveRanges">resetSourceNatActiveRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps">resetSourceNatDrainIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainRanges">resetSourceNatDrainRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceNatActiveIps` <a name="resetSourceNatActiveIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveIps"></a>

```typescript
public resetSourceNatActiveIps(): void
```

##### `resetSourceNatActiveRanges` <a name="resetSourceNatActiveRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatActiveRanges"></a>

```typescript
public resetSourceNatActiveRanges(): void
```

##### `resetSourceNatDrainIps` <a name="resetSourceNatDrainIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainIps"></a>

```typescript
public resetSourceNatDrainIps(): void
```

##### `resetSourceNatDrainRanges` <a name="resetSourceNatDrainRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.resetSourceNatDrainRanges"></a>

```typescript
public resetSourceNatDrainRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput">sourceNatActiveIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRangesInput">sourceNatActiveRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput">sourceNatDrainIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRangesInput">sourceNatDrainRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps">sourceNatActiveIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRanges">sourceNatActiveRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps">sourceNatDrainIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRanges">sourceNatDrainRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceNatActiveIpsInput`<sup>Optional</sup> <a name="sourceNatActiveIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIpsInput"></a>

```typescript
public readonly sourceNatActiveIpsInput: string[];
```

- *Type:* string[]

---

##### `sourceNatActiveRangesInput`<sup>Optional</sup> <a name="sourceNatActiveRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRangesInput"></a>

```typescript
public readonly sourceNatActiveRangesInput: string[];
```

- *Type:* string[]

---

##### `sourceNatDrainIpsInput`<sup>Optional</sup> <a name="sourceNatDrainIpsInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIpsInput"></a>

```typescript
public readonly sourceNatDrainIpsInput: string[];
```

- *Type:* string[]

---

##### `sourceNatDrainRangesInput`<sup>Optional</sup> <a name="sourceNatDrainRangesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRangesInput"></a>

```typescript
public readonly sourceNatDrainRangesInput: string[];
```

- *Type:* string[]

---

##### `sourceNatActiveIps`<sup>Required</sup> <a name="sourceNatActiveIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveIps"></a>

```typescript
public readonly sourceNatActiveIps: string[];
```

- *Type:* string[]

---

##### `sourceNatActiveRanges`<sup>Required</sup> <a name="sourceNatActiveRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatActiveRanges"></a>

```typescript
public readonly sourceNatActiveRanges: string[];
```

- *Type:* string[]

---

##### `sourceNatDrainIps`<sup>Required</sup> <a name="sourceNatDrainIps" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainIps"></a>

```typescript
public readonly sourceNatDrainIps: string[];
```

- *Type:* string[]

---

##### `sourceNatDrainRanges`<sup>Required</sup> <a name="sourceNatDrainRanges" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.sourceNatDrainRanges"></a>

```typescript
public readonly sourceNatDrainRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRouterNatRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---


### GoogleComputeRouterNatRulesList <a name="GoogleComputeRouterNatRulesList" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

new googleComputeRouterNat.GoogleComputeRouterNatRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get"></a>

```typescript
public get(index: number): GoogleComputeRouterNatRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterNatRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>[]

---


### GoogleComputeRouterNatRulesOutputReference <a name="GoogleComputeRouterNatRulesOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

new googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAction` <a name="putAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction"></a>

```typescript
public putAction(value: GoogleComputeRouterNatRulesAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.action">action</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference">GoogleComputeRouterNatRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.actionInput">actionInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumberInput">ruleNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumber">ruleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.action"></a>

```typescript
public readonly action: GoogleComputeRouterNatRulesActionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesActionOutputReference">GoogleComputeRouterNatRulesActionOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: GoogleComputeRouterNatRulesAction;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesAction">GoogleComputeRouterNatRulesAction</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `ruleNumberInput`<sup>Optional</sup> <a name="ruleNumberInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumberInput"></a>

```typescript
public readonly ruleNumberInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `ruleNumber`<sup>Required</sup> <a name="ruleNumber" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.ruleNumber"></a>

```typescript
public readonly ruleNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterNatRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatRules">GoogleComputeRouterNatRules</a>

---


### GoogleComputeRouterNatSubnetworkList <a name="GoogleComputeRouterNatSubnetworkList" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

new googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get"></a>

```typescript
public get(index: number): GoogleComputeRouterNatSubnetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterNatSubnetwork[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>[]

---


### GoogleComputeRouterNatSubnetworkOutputReference <a name="GoogleComputeRouterNatSubnetworkOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

new googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames">resetSecondaryIpRangeNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecondaryIpRangeNames` <a name="resetSecondaryIpRangeNames" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.resetSecondaryIpRangeNames"></a>

```typescript
public resetSecondaryIpRangeNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput">secondaryIpRangeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput">sourceIpRangesToNatInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames">secondaryIpRangeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat">sourceIpRangesToNat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `secondaryIpRangeNamesInput`<sup>Optional</sup> <a name="secondaryIpRangeNamesInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNamesInput"></a>

```typescript
public readonly secondaryIpRangeNamesInput: string[];
```

- *Type:* string[]

---

##### `sourceIpRangesToNatInput`<sup>Optional</sup> <a name="sourceIpRangesToNatInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNatInput"></a>

```typescript
public readonly sourceIpRangesToNatInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `secondaryIpRangeNames`<sup>Required</sup> <a name="secondaryIpRangeNames" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.secondaryIpRangeNames"></a>

```typescript
public readonly secondaryIpRangeNames: string[];
```

- *Type:* string[]

---

##### `sourceIpRangesToNat`<sup>Required</sup> <a name="sourceIpRangesToNat" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.sourceIpRangesToNat"></a>

```typescript
public readonly sourceIpRangesToNat: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterNatSubnetwork;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatSubnetwork">GoogleComputeRouterNatSubnetwork</a>

---


### GoogleComputeRouterNatTimeoutsOutputReference <a name="GoogleComputeRouterNatTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRouterNat } from '@cdktf/provider-google-beta'

new googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRouterNatTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRouterNat.GoogleComputeRouterNatTimeouts">GoogleComputeRouterNatTimeouts</a>

---



