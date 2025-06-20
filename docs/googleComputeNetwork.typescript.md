# `googleComputeNetwork` Submodule <a name="`googleComputeNetwork` Submodule" id="@cdktf/provider-google-beta.googleComputeNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNetwork <a name="GoogleComputeNetwork" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network google_compute_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer"></a>

```typescript
import { googleComputeNetwork } from '@cdktf/provider-google-beta'

new googleComputeNetwork.GoogleComputeNetwork(scope: Construct, id: string, config: GoogleComputeNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig">GoogleComputeNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig">GoogleComputeNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetAutoCreateSubnetworks">resetAutoCreateSubnetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpAlwaysCompareMed">resetBgpAlwaysCompareMed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpBestPathSelectionMode">resetBgpBestPathSelectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpInterRegionCost">resetBgpInterRegionCost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetDeleteDefaultRoutesOnCreate">resetDeleteDefaultRoutesOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetEnableUlaInternalIpv6">resetEnableUlaInternalIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetInternalIpv6Range">resetInternalIpv6Range</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder">resetNetworkFirewallPolicyEnforcementOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetNetworkProfile">resetNetworkProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetRoutingMode">resetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a>

---

##### `resetAutoCreateSubnetworks` <a name="resetAutoCreateSubnetworks" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetAutoCreateSubnetworks"></a>

```typescript
public resetAutoCreateSubnetworks(): void
```

##### `resetBgpAlwaysCompareMed` <a name="resetBgpAlwaysCompareMed" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpAlwaysCompareMed"></a>

```typescript
public resetBgpAlwaysCompareMed(): void
```

##### `resetBgpBestPathSelectionMode` <a name="resetBgpBestPathSelectionMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpBestPathSelectionMode"></a>

```typescript
public resetBgpBestPathSelectionMode(): void
```

##### `resetBgpInterRegionCost` <a name="resetBgpInterRegionCost" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetBgpInterRegionCost"></a>

```typescript
public resetBgpInterRegionCost(): void
```

##### `resetDeleteDefaultRoutesOnCreate` <a name="resetDeleteDefaultRoutesOnCreate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetDeleteDefaultRoutesOnCreate"></a>

```typescript
public resetDeleteDefaultRoutesOnCreate(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableUlaInternalIpv6` <a name="resetEnableUlaInternalIpv6" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetEnableUlaInternalIpv6"></a>

```typescript
public resetEnableUlaInternalIpv6(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInternalIpv6Range` <a name="resetInternalIpv6Range" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetInternalIpv6Range"></a>

```typescript
public resetInternalIpv6Range(): void
```

##### `resetMtu` <a name="resetMtu" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetNetworkFirewallPolicyEnforcementOrder` <a name="resetNetworkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetNetworkFirewallPolicyEnforcementOrder"></a>

```typescript
public resetNetworkFirewallPolicyEnforcementOrder(): void
```

##### `resetNetworkProfile` <a name="resetNetworkProfile" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetNetworkProfile"></a>

```typescript
public resetNetworkProfile(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRoutingMode` <a name="resetRoutingMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetRoutingMode"></a>

```typescript
public resetRoutingMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isConstruct"></a>

```typescript
import { googleComputeNetwork } from '@cdktf/provider-google-beta'

googleComputeNetwork.GoogleComputeNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformElement"></a>

```typescript
import { googleComputeNetwork } from '@cdktf/provider-google-beta'

googleComputeNetwork.GoogleComputeNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformResource"></a>

```typescript
import { googleComputeNetwork } from '@cdktf/provider-google-beta'

googleComputeNetwork.GoogleComputeNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport"></a>

```typescript
import { googleComputeNetwork } from '@cdktf/provider-google-beta'

googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.gatewayIpv4">gatewayIpv4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.numericId">numericId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference">GoogleComputeNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.autoCreateSubnetworksInput">autoCreateSubnetworksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpAlwaysCompareMedInput">bgpAlwaysCompareMedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpBestPathSelectionModeInput">bgpBestPathSelectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpInterRegionCostInput">bgpInterRegionCostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.deleteDefaultRoutesOnCreateInput">deleteDefaultRoutesOnCreateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.enableUlaInternalIpv6Input">enableUlaInternalIpv6Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.internalIpv6RangeInput">internalIpv6RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput">networkFirewallPolicyEnforcementOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkProfileInput">networkProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.routingModeInput">routingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.autoCreateSubnetworks">autoCreateSubnetworks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpAlwaysCompareMed">bgpAlwaysCompareMed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpBestPathSelectionMode">bgpBestPathSelectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpInterRegionCost">bgpInterRegionCost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.deleteDefaultRoutesOnCreate">deleteDefaultRoutesOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.enableUlaInternalIpv6">enableUlaInternalIpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.internalIpv6Range">internalIpv6Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkFirewallPolicyEnforcementOrder">networkFirewallPolicyEnforcementOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkProfile">networkProfile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.routingMode">routingMode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `gatewayIpv4`<sup>Required</sup> <a name="gatewayIpv4" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.gatewayIpv4"></a>

```typescript
public readonly gatewayIpv4: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `numericId`<sup>Required</sup> <a name="numericId" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.numericId"></a>

```typescript
public readonly numericId: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference">GoogleComputeNetworkTimeoutsOutputReference</a>

---

##### `autoCreateSubnetworksInput`<sup>Optional</sup> <a name="autoCreateSubnetworksInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.autoCreateSubnetworksInput"></a>

```typescript
public readonly autoCreateSubnetworksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bgpAlwaysCompareMedInput`<sup>Optional</sup> <a name="bgpAlwaysCompareMedInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpAlwaysCompareMedInput"></a>

```typescript
public readonly bgpAlwaysCompareMedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bgpBestPathSelectionModeInput`<sup>Optional</sup> <a name="bgpBestPathSelectionModeInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpBestPathSelectionModeInput"></a>

```typescript
public readonly bgpBestPathSelectionModeInput: string;
```

- *Type:* string

---

##### `bgpInterRegionCostInput`<sup>Optional</sup> <a name="bgpInterRegionCostInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpInterRegionCostInput"></a>

```typescript
public readonly bgpInterRegionCostInput: string;
```

- *Type:* string

---

##### `deleteDefaultRoutesOnCreateInput`<sup>Optional</sup> <a name="deleteDefaultRoutesOnCreateInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.deleteDefaultRoutesOnCreateInput"></a>

```typescript
public readonly deleteDefaultRoutesOnCreateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableUlaInternalIpv6Input`<sup>Optional</sup> <a name="enableUlaInternalIpv6Input" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.enableUlaInternalIpv6Input"></a>

```typescript
public readonly enableUlaInternalIpv6Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `internalIpv6RangeInput`<sup>Optional</sup> <a name="internalIpv6RangeInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.internalIpv6RangeInput"></a>

```typescript
public readonly internalIpv6RangeInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkFirewallPolicyEnforcementOrderInput`<sup>Optional</sup> <a name="networkFirewallPolicyEnforcementOrderInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkFirewallPolicyEnforcementOrderInput"></a>

```typescript
public readonly networkFirewallPolicyEnforcementOrderInput: string;
```

- *Type:* string

---

##### `networkProfileInput`<sup>Optional</sup> <a name="networkProfileInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkProfileInput"></a>

```typescript
public readonly networkProfileInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `routingModeInput`<sup>Optional</sup> <a name="routingModeInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.routingModeInput"></a>

```typescript
public readonly routingModeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a>

---

##### `autoCreateSubnetworks`<sup>Required</sup> <a name="autoCreateSubnetworks" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.autoCreateSubnetworks"></a>

```typescript
public readonly autoCreateSubnetworks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bgpAlwaysCompareMed`<sup>Required</sup> <a name="bgpAlwaysCompareMed" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpAlwaysCompareMed"></a>

```typescript
public readonly bgpAlwaysCompareMed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `bgpBestPathSelectionMode`<sup>Required</sup> <a name="bgpBestPathSelectionMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpBestPathSelectionMode"></a>

```typescript
public readonly bgpBestPathSelectionMode: string;
```

- *Type:* string

---

##### `bgpInterRegionCost`<sup>Required</sup> <a name="bgpInterRegionCost" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.bgpInterRegionCost"></a>

```typescript
public readonly bgpInterRegionCost: string;
```

- *Type:* string

---

##### `deleteDefaultRoutesOnCreate`<sup>Required</sup> <a name="deleteDefaultRoutesOnCreate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.deleteDefaultRoutesOnCreate"></a>

```typescript
public readonly deleteDefaultRoutesOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enableUlaInternalIpv6`<sup>Required</sup> <a name="enableUlaInternalIpv6" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.enableUlaInternalIpv6"></a>

```typescript
public readonly enableUlaInternalIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `internalIpv6Range`<sup>Required</sup> <a name="internalIpv6Range" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.internalIpv6Range"></a>

```typescript
public readonly internalIpv6Range: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkFirewallPolicyEnforcementOrder`<sup>Required</sup> <a name="networkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkFirewallPolicyEnforcementOrder"></a>

```typescript
public readonly networkFirewallPolicyEnforcementOrder: string;
```

- *Type:* string

---

##### `networkProfile`<sup>Required</sup> <a name="networkProfile" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.networkProfile"></a>

```typescript
public readonly networkProfile: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `routingMode`<sup>Required</sup> <a name="routingMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.routingMode"></a>

```typescript
public readonly routingMode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNetworkConfig <a name="GoogleComputeNetworkConfig" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.Initializer"></a>

```typescript
import { googleComputeNetwork } from '@cdktf/provider-google-beta'

const googleComputeNetworkConfig: googleComputeNetwork.GoogleComputeNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.autoCreateSubnetworks">autoCreateSubnetworks</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpAlwaysCompareMed">bgpAlwaysCompareMed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables/disables the comparison of MED across routes with different Neighbor ASNs. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpBestPathSelectionMode">bgpBestPathSelectionMode</a></code> | <code>string</code> | The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpInterRegionCost">bgpInterRegionCost</a></code> | <code>string</code> | Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.deleteDefaultRoutesOnCreate">deleteDefaultRoutesOnCreate</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. The resource must be recreated to modify this field. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.enableUlaInternalIpv6">enableUlaInternalIpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#id GoogleComputeNetwork#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.internalIpv6Range">internalIpv6Range</a></code> | <code>string</code> | When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.mtu">mtu</a></code> | <code>number</code> | Maximum Transmission Unit in bytes. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder">networkFirewallPolicyEnforcementOrder</a></code> | <code>string</code> | Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.networkProfile">networkProfile</a></code> | <code>string</code> | A full or partial URL of the network profile to apply to this network. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#project GoogleComputeNetwork#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.routingMode">routingMode</a></code> | <code>string</code> | The network-wide routing mode to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#name GoogleComputeNetwork#name}

---

##### `autoCreateSubnetworks`<sup>Optional</sup> <a name="autoCreateSubnetworks" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.autoCreateSubnetworks"></a>

```typescript
public readonly autoCreateSubnetworks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to 'true', the network is created in "auto subnet mode" and it will create a subnet for each region automatically across the '10.128.0.0/9' address range.

When set to 'false', the network is created in "custom subnet mode" so
the user can explicitly connect subnetwork resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#auto_create_subnetworks GoogleComputeNetwork#auto_create_subnetworks}

---

##### `bgpAlwaysCompareMed`<sup>Optional</sup> <a name="bgpAlwaysCompareMed" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpAlwaysCompareMed"></a>

```typescript
public readonly bgpAlwaysCompareMed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables/disables the comparison of MED across routes with different Neighbor ASNs.

This value can only be set if the --bgp-best-path-selection-mode is STANDARD

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#bgp_always_compare_med GoogleComputeNetwork#bgp_always_compare_med}

---

##### `bgpBestPathSelectionMode`<sup>Optional</sup> <a name="bgpBestPathSelectionMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpBestPathSelectionMode"></a>

```typescript
public readonly bgpBestPathSelectionMode: string;
```

- *Type:* string

The BGP best selection algorithm to be employed. MODE can be LEGACY or STANDARD. Possible values: ["LEGACY", "STANDARD"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#bgp_best_path_selection_mode GoogleComputeNetwork#bgp_best_path_selection_mode}

---

##### `bgpInterRegionCost`<sup>Optional</sup> <a name="bgpInterRegionCost" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.bgpInterRegionCost"></a>

```typescript
public readonly bgpInterRegionCost: string;
```

- *Type:* string

Choice of the behavior of inter-regional cost and MED in the BPS algorithm. Possible values: ["DEFAULT", "ADD_COST_TO_MED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#bgp_inter_region_cost GoogleComputeNetwork#bgp_inter_region_cost}

---

##### `deleteDefaultRoutesOnCreate`<sup>Optional</sup> <a name="deleteDefaultRoutesOnCreate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.deleteDefaultRoutesOnCreate"></a>

```typescript
public readonly deleteDefaultRoutesOnCreate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to 'true', default routes ('0.0.0.0/0') will be deleted immediately after network creation. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#delete_default_routes_on_create GoogleComputeNetwork#delete_default_routes_on_create}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. The resource must be recreated to modify this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#description GoogleComputeNetwork#description}

---

##### `enableUlaInternalIpv6`<sup>Optional</sup> <a name="enableUlaInternalIpv6" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.enableUlaInternalIpv6"></a>

```typescript
public readonly enableUlaInternalIpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable ULA internal ipv6 on this network. Enabling this feature will assign a /48 from google defined ULA prefix fd20::/20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#enable_ula_internal_ipv6 GoogleComputeNetwork#enable_ula_internal_ipv6}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#id GoogleComputeNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internalIpv6Range`<sup>Optional</sup> <a name="internalIpv6Range" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.internalIpv6Range"></a>

```typescript
public readonly internalIpv6Range: string;
```

- *Type:* string

When enabling ula internal ipv6, caller optionally can specify the /48 range they want from the google defined ULA prefix fd20::/20.

The input must be a
valid /48 ULA IPv6 address and must be within the fd20::/20. Operation will
fail if the speficied /48 is already in used by another resource.
If the field is not speficied, then a /48 range will be randomly allocated from fd20::/20 and returned via this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#internal_ipv6_range GoogleComputeNetwork#internal_ipv6_range}

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Maximum Transmission Unit in bytes.

The default value is 1460 bytes.
The minimum value for this field is 1300 and the maximum value is 8896 bytes (jumbo frames).
Note that packets larger than 1500 bytes (standard Ethernet) can be subject to TCP-MSS clamping or dropped
with an ICMP 'Fragmentation-Needed' message if the packets are routed to the Internet or other VPCs
with varying MTUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#mtu GoogleComputeNetwork#mtu}

---

##### `networkFirewallPolicyEnforcementOrder`<sup>Optional</sup> <a name="networkFirewallPolicyEnforcementOrder" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.networkFirewallPolicyEnforcementOrder"></a>

```typescript
public readonly networkFirewallPolicyEnforcementOrder: string;
```

- *Type:* string

Set the order that Firewall Rules and Firewall Policies are evaluated. Default value: "AFTER_CLASSIC_FIREWALL" Possible values: ["BEFORE_CLASSIC_FIREWALL", "AFTER_CLASSIC_FIREWALL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#network_firewall_policy_enforcement_order GoogleComputeNetwork#network_firewall_policy_enforcement_order}

---

##### `networkProfile`<sup>Optional</sup> <a name="networkProfile" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.networkProfile"></a>

```typescript
public readonly networkProfile: string;
```

- *Type:* string

A full or partial URL of the network profile to apply to this network.

This field can be set only at resource creation time. For example, the
following are valid URLs:
* https://www.googleapis.com/compute/v1/projects/{projectId}/global/networkProfiles/{network_profile_name}
* projects/{projectId}/global/networkProfiles/{network_profile_name}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#network_profile GoogleComputeNetwork#network_profile}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#project GoogleComputeNetwork#project}.

---

##### `routingMode`<sup>Optional</sup> <a name="routingMode" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.routingMode"></a>

```typescript
public readonly routingMode: string;
```

- *Type:* string

The network-wide routing mode to use.

If set to 'REGIONAL', this
network's cloud routers will only advertise routes with subnetworks
of this network in the same region as the router. If set to 'GLOBAL',
this network's cloud routers will advertise routes with all
subnetworks of this network, across regions. Possible values: ["REGIONAL", "GLOBAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#routing_mode GoogleComputeNetwork#routing_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeNetworkTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#timeouts GoogleComputeNetwork#timeouts}

---

### GoogleComputeNetworkTimeouts <a name="GoogleComputeNetworkTimeouts" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.Initializer"></a>

```typescript
import { googleComputeNetwork } from '@cdktf/provider-google-beta'

const googleComputeNetworkTimeouts: googleComputeNetwork.GoogleComputeNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#create GoogleComputeNetwork#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#delete GoogleComputeNetwork#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#update GoogleComputeNetwork#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#create GoogleComputeNetwork#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#delete GoogleComputeNetwork#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.40.0/docs/resources/google_compute_network#update GoogleComputeNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNetworkTimeoutsOutputReference <a name="GoogleComputeNetworkTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeNetwork } from '@cdktf/provider-google-beta'

new googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeNetwork.GoogleComputeNetworkTimeouts">GoogleComputeNetworkTimeouts</a>

---



