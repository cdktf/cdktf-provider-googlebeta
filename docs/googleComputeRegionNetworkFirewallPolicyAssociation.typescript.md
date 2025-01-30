# `googleComputeRegionNetworkFirewallPolicyAssociation` Submodule <a name="`googleComputeRegionNetworkFirewallPolicyAssociation` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkFirewallPolicyAssociation <a name="GoogleComputeRegionNetworkFirewallPolicyAssociation" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association google_compute_region_network_firewall_policy_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation(scope: Construct, id: string, config: GoogleComputeRegionNetworkFirewallPolicyAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig">GoogleComputeRegionNetworkFirewallPolicyAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig">GoogleComputeRegionNetworkFirewallPolicyAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts">GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isConstruct"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicyAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionNetworkFirewallPolicyAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionNetworkFirewallPolicyAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkFirewallPolicyAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTargetInput">attachmentTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicyInput">firewallPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts">GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTarget">attachmentTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference</a>

---

##### `attachmentTargetInput`<sup>Optional</sup> <a name="attachmentTargetInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTargetInput"></a>

```typescript
public readonly attachmentTargetInput: string;
```

- *Type:* string

---

##### `firewallPolicyInput`<sup>Optional</sup> <a name="firewallPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicyInput"></a>

```typescript
public readonly firewallPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts">GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

---

##### `attachmentTarget`<sup>Required</sup> <a name="attachmentTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.attachmentTarget"></a>

```typescript
public readonly attachmentTarget: string;
```

- *Type:* string

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkFirewallPolicyAssociationConfig <a name="GoogleComputeRegionNetworkFirewallPolicyAssociationConfig" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyAssociationConfig: googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.attachmentTarget">attachmentTarget</a></code> | <code>string</code> | The target that the firewall policy is attached to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.firewallPolicy">firewallPolicy</a></code> | <code>string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.name">name</a></code> | <code>string</code> | The name for an association. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#id GoogleComputeRegionNetworkFirewallPolicyAssociation#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#project GoogleComputeRegionNetworkFirewallPolicyAssociation#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.region">region</a></code> | <code>string</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts">GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attachmentTarget`<sup>Required</sup> <a name="attachmentTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.attachmentTarget"></a>

```typescript
public readonly attachmentTarget: string;
```

- *Type:* string

The target that the firewall policy is attached to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#attachment_target GoogleComputeRegionNetworkFirewallPolicyAssociation#attachment_target}

---

##### `firewallPolicy`<sup>Required</sup> <a name="firewallPolicy" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.firewallPolicy"></a>

```typescript
public readonly firewallPolicy: string;
```

- *Type:* string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#firewall_policy GoogleComputeRegionNetworkFirewallPolicyAssociation#firewall_policy}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for an association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#name GoogleComputeRegionNetworkFirewallPolicyAssociation#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#id GoogleComputeRegionNetworkFirewallPolicyAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#project GoogleComputeRegionNetworkFirewallPolicyAssociation#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#region GoogleComputeRegionNetworkFirewallPolicyAssociation#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts">GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#timeouts GoogleComputeRegionNetworkFirewallPolicyAssociation#timeouts}

---

### GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts <a name="GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyAssociationTimeouts: googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#create GoogleComputeRegionNetworkFirewallPolicyAssociation#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#delete GoogleComputeRegionNetworkFirewallPolicyAssociation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#create GoogleComputeRegionNetworkFirewallPolicyAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_compute_region_network_firewall_policy_association#delete GoogleComputeRegionNetworkFirewallPolicyAssociation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyAssociation } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts">GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyAssociation.GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts">GoogleComputeRegionNetworkFirewallPolicyAssociationTimeouts</a>

---



