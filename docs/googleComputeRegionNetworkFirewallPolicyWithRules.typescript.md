# `googleComputeRegionNetworkFirewallPolicyWithRules` Submodule <a name="`googleComputeRegionNetworkFirewallPolicyWithRules` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionNetworkFirewallPolicyWithRules <a name="GoogleComputeRegionNetworkFirewallPolicyWithRules" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules google_compute_region_network_firewall_policy_with_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules(scope: Construct, id: string, config: GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig">GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig">GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRule` <a name="putRule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.putRule"></a>

```typescript
public putRule(value: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.putRule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule">GoogleComputeRegionNetworkFirewallPolicyWithRulesRule</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isConstruct"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isTerraformElement"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isTerraformResource"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRegionNetworkFirewallPolicyWithRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionNetworkFirewallPolicyWithRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionNetworkFirewallPolicyWithRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionNetworkFirewallPolicyWithRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.networkFirewallPolicyId">networkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.predefinedRules">predefinedRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.ruleTupleCount">ruleTupleCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.selfLinkWithId">selfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.ruleInput">ruleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule">GoogleComputeRegionNetworkFirewallPolicyWithRulesRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `networkFirewallPolicyId`<sup>Required</sup> <a name="networkFirewallPolicyId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.networkFirewallPolicyId"></a>

```typescript
public readonly networkFirewallPolicyId: string;
```

- *Type:* string

---

##### `predefinedRules`<sup>Required</sup> <a name="predefinedRules" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.predefinedRules"></a>

```typescript
public readonly predefinedRules: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.rule"></a>

```typescript
public readonly rule: GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList</a>

---

##### `ruleTupleCount`<sup>Required</sup> <a name="ruleTupleCount" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.ruleTupleCount"></a>

```typescript
public readonly ruleTupleCount: number;
```

- *Type:* number

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.selfLinkWithId"></a>

```typescript
public readonly selfLinkWithId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference">GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.ruleInput"></a>

```typescript
public readonly ruleInput: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule">GoogleComputeRegionNetworkFirewallPolicyWithRulesRule</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesConfig: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.name">name</a></code> | <code>string</code> | User-provided name of the Network firewall policy. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.rule">rule</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule">GoogleComputeRegionNetworkFirewallPolicyWithRulesRule</a>[]</code> | rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#id GoogleComputeRegionNetworkFirewallPolicyWithRules#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#project GoogleComputeRegionNetworkFirewallPolicyWithRules#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.region">region</a></code> | <code>string</code> | The region of this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

User-provided name of the Network firewall policy.

The name should be unique in the project in which the firewall policy is created.
The name must be 1-63 characters long, and comply with RFC1035. Specifically,
the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?
which means the first character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#name GoogleComputeRegionNetworkFirewallPolicyWithRules#name}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.rule"></a>

```typescript
public readonly rule: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule">GoogleComputeRegionNetworkFirewallPolicyWithRulesRule</a>[]

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#rule GoogleComputeRegionNetworkFirewallPolicyWithRules#rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#description GoogleComputeRegionNetworkFirewallPolicyWithRules#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#id GoogleComputeRegionNetworkFirewallPolicyWithRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#project GoogleComputeRegionNetworkFirewallPolicyWithRules#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#region GoogleComputeRegionNetworkFirewallPolicyWithRules#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#timeouts GoogleComputeRegionNetworkFirewallPolicyWithRules#timeouts}

---

### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules = { ... }
```


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch = { ... }
```


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config = { ... }
```


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag = { ... }
```


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag = { ... }
```


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRule <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRule" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesRule: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.action">action</a></code> | <code>string</code> | The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.priority">priority</a></code> | <code>number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.description">description</a></code> | <code>string</code> | A description of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.direction">direction</a></code> | <code>string</code> | The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.ruleName">ruleName</a></code> | <code>string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.targetSecureTag">targetSecureTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>[]</code> | target_secure_tag block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.tlsInspect">tlsInspect</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean flag indicating if the traffic should be TLS decrypted. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The Action to perform when the client connection triggers the rule. Can currently be either "allow", "deny", "apply_security_profile_group" or "goto_next".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#action GoogleComputeRegionNetworkFirewallPolicyWithRules#action}

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.match"></a>

```typescript
public readonly match: GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#match GoogleComputeRegionNetworkFirewallPolicyWithRules#match}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

An integer indicating the priority of a rule in the list.

The priority must be a value
between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the
highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#priority GoogleComputeRegionNetworkFirewallPolicyWithRules#priority}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#description GoogleComputeRegionNetworkFirewallPolicyWithRules#description}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction in which this rule applies. If unspecified an INGRESS rule is created. Possible values: ["INGRESS", "EGRESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#direction GoogleComputeRegionNetworkFirewallPolicyWithRules#direction}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether the firewall policy rule is disabled.

When set to true,
the firewall policy rule is not enforced and traffic behaves as if it did
not exist. If this is unspecified, the firewall policy rule will be
enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#disabled GoogleComputeRegionNetworkFirewallPolicyWithRules#disabled}

---

##### `enableLogging`<sup>Optional</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the
configured export destination in Stackdriver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#enable_logging GoogleComputeRegionNetworkFirewallPolicyWithRules#enable_logging}

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#rule_name GoogleComputeRegionNetworkFirewallPolicyWithRules#rule_name}

---

##### `securityProfileGroup`<sup>Optional</sup> <a name="securityProfileGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

A fully-qualified URL of a SecurityProfile resource instance. Example: https://networksecurity.googleapis.com/v1/projects/{project}/locations/{location}/securityProfileGroups/my-security-profile-group Must be specified if action is 'apply_security_profile_group'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#security_profile_group GoogleComputeRegionNetworkFirewallPolicyWithRules#security_profile_group}

---

##### `targetSecureTag`<sup>Optional</sup> <a name="targetSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.targetSecureTag"></a>

```typescript
public readonly targetSecureTag: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>[]

target_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#target_secure_tag GoogleComputeRegionNetworkFirewallPolicyWithRules#target_secure_tag}

---

##### `targetServiceAccounts`<sup>Optional</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#target_service_accounts GoogleComputeRegionNetworkFirewallPolicyWithRules#target_service_accounts}

---

##### `tlsInspect`<sup>Optional</sup> <a name="tlsInspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean flag indicating if the traffic should be TLS decrypted.

It can be set only if action = 'apply_security_profile_group' and cannot be set for other actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#tls_inspect GoogleComputeRegionNetworkFirewallPolicyWithRules#tls_inspect}

---

### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.layer4Config">layer4Config</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]</code> | layer4_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destAddressGroups">destAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destFqdns">destFqdns</a></code> | <code>string[]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | Destination IP address range in CIDR format. Required for EGRESS rules. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destRegionCodes">destRegionCodes</a></code> | <code>string[]</code> | Region codes whose IP addresses will be used to match for destination of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>string[]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups">srcAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic source. Maximum number of source address groups is 10. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcFqdns">srcFqdns</a></code> | <code>string[]</code> | Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | Source IP address range in CIDR format. Required for INGRESS rules. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | Region codes whose IP addresses will be used to match for source of traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcSecureTag">srcSecureTag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]</code> | src_secure_tag block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>string[]</code> | Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source. |

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.layer4Config"></a>

```typescript
public readonly layer4Config: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]

layer4_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#layer4_config GoogleComputeRegionNetworkFirewallPolicyWithRules#layer4_config}

---

##### `destAddressGroups`<sup>Optional</sup> <a name="destAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destAddressGroups"></a>

```typescript
public readonly destAddressGroups: string[];
```

- *Type:* string[]

Address groups which should be matched against the traffic destination. Maximum number of destination address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#dest_address_groups GoogleComputeRegionNetworkFirewallPolicyWithRules#dest_address_groups}

---

##### `destFqdns`<sup>Optional</sup> <a name="destFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destFqdns"></a>

```typescript
public readonly destFqdns: string[];
```

- *Type:* string[]

Fully Qualified Domain Name (FQDN) which should be matched against traffic destination. Maximum number of destination fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#dest_fqdns GoogleComputeRegionNetworkFirewallPolicyWithRules#dest_fqdns}

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

Destination IP address range in CIDR format. Required for EGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#dest_ip_ranges GoogleComputeRegionNetworkFirewallPolicyWithRules#dest_ip_ranges}

---

##### `destRegionCodes`<sup>Optional</sup> <a name="destRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destRegionCodes"></a>

```typescript
public readonly destRegionCodes: string[];
```

- *Type:* string[]

Region codes whose IP addresses will be used to match for destination of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of destination region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#dest_region_codes GoogleComputeRegionNetworkFirewallPolicyWithRules#dest_region_codes}

---

##### `destThreatIntelligences`<sup>Optional</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.destThreatIntelligences"></a>

```typescript
public readonly destThreatIntelligences: string[];
```

- *Type:* string[]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#dest_threat_intelligences GoogleComputeRegionNetworkFirewallPolicyWithRules#dest_threat_intelligences}

---

##### `srcAddressGroups`<sup>Optional</sup> <a name="srcAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcAddressGroups"></a>

```typescript
public readonly srcAddressGroups: string[];
```

- *Type:* string[]

Address groups which should be matched against the traffic source. Maximum number of source address groups is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#src_address_groups GoogleComputeRegionNetworkFirewallPolicyWithRules#src_address_groups}

---

##### `srcFqdns`<sup>Optional</sup> <a name="srcFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcFqdns"></a>

```typescript
public readonly srcFqdns: string[];
```

- *Type:* string[]

Fully Qualified Domain Name (FQDN) which should be matched against traffic source. Maximum number of source fqdn allowed is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#src_fqdns GoogleComputeRegionNetworkFirewallPolicyWithRules#src_fqdns}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

Source IP address range in CIDR format. Required for INGRESS rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#src_ip_ranges GoogleComputeRegionNetworkFirewallPolicyWithRules#src_ip_ranges}

---

##### `srcRegionCodes`<sup>Optional</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

Region codes whose IP addresses will be used to match for source of traffic.

Should be specified as 2 letter country code defined as per
ISO 3166 alpha-2 country codes. ex."US"
Maximum number of source region codes allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#src_region_codes GoogleComputeRegionNetworkFirewallPolicyWithRules#src_region_codes}

---

##### `srcSecureTag`<sup>Optional</sup> <a name="srcSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcSecureTag"></a>

```typescript
public readonly srcSecureTag: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]

src_secure_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#src_secure_tag GoogleComputeRegionNetworkFirewallPolicyWithRules#src_secure_tag}

---

##### `srcThreatIntelligences`<sup>Optional</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch.property.srcThreatIntelligences"></a>

```typescript
public readonly srcThreatIntelligences: string[];
```

- *Type:* string[]

Names of Network Threat Intelligence lists. The IPs in these lists will be matched against traffic source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#src_threat_intelligences GoogleComputeRegionNetworkFirewallPolicyWithRules#src_threat_intelligences}

---

### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports">ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol
type is required when creating a firewall rule.
This value can either be one of the following well
known protocol strings (tcp, udp, icmp, esp, ah, ipip, sctp),
or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#ip_protocol GoogleComputeRegionNetworkFirewallPolicyWithRules#ip_protocol}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field
is only applicable for UDP or TCP protocol. Each entry must be
either an integer or a range. If not specified, this rule
applies to connections through any port.
Example inputs include: ["22"], ["80","443"], and
["12345-12349"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#ports GoogleComputeRegionNetworkFirewallPolicyWithRules#ports}

---

### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name">name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

---

### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag.property.name">name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

---

### GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

const googleComputeRegionNetworkFirewallPolicyWithRulesTimeouts: googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#create GoogleComputeRegionNetworkFirewallPolicyWithRules#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#delete GoogleComputeRegionNetworkFirewallPolicyWithRules#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#update GoogleComputeRegionNetworkFirewallPolicyWithRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#create GoogleComputeRegionNetworkFirewallPolicyWithRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#delete GoogleComputeRegionNetworkFirewallPolicyWithRules#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/resources/google_compute_region_network_firewall_policy_with_rules#update GoogleComputeRegionNetworkFirewallPolicyWithRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4Config</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups">destAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns">destFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes">destRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config">layer4Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups">srcAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns">srcFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag">srcSecureTag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destAddressGroups`<sup>Required</sup> <a name="destAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destAddressGroups"></a>

```typescript
public readonly destAddressGroups: string[];
```

- *Type:* string[]

---

##### `destFqdns`<sup>Required</sup> <a name="destFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destFqdns"></a>

```typescript
public readonly destFqdns: string[];
```

- *Type:* string[]

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `destRegionCodes`<sup>Required</sup> <a name="destRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destRegionCodes"></a>

```typescript
public readonly destRegionCodes: string[];
```

- *Type:* string[]

---

##### `destThreatIntelligences`<sup>Required</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.destThreatIntelligences"></a>

```typescript
public readonly destThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.layer4Config"></a>

```typescript
public readonly layer4Config: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchLayer4ConfigList</a>

---

##### `srcAddressGroups`<sup>Required</sup> <a name="srcAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcAddressGroups"></a>

```typescript
public readonly srcAddressGroups: string[];
```

- *Type:* string[]

---

##### `srcFqdns`<sup>Required</sup> <a name="srcFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcFqdns"></a>

```typescript
public readonly srcFqdns: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

---

##### `srcSecureTag`<sup>Required</sup> <a name="srcSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcSecureTag"></a>

```typescript
public readonly srcSecureTag: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList</a>

---

##### `srcThreatIntelligences`<sup>Required</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.srcThreatIntelligences"></a>

```typescript
public readonly srcThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatch</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchSrcSecureTag</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled">disabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging">enableLogging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag">targetSecureTag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect">tlsInspect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.disabled"></a>

```typescript
public readonly disabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.match"></a>

```typescript
public readonly match: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesMatchList</a>

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `securityProfileGroup`<sup>Required</sup> <a name="securityProfileGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

---

##### `targetSecureTag`<sup>Required</sup> <a name="targetSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetSecureTag"></a>

```typescript
public readonly targetSecureTag: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList</a>

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

---

##### `tlsInspect`<sup>Required</sup> <a name="tlsInspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRules</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesPredefinedRulesTargetSecureTag</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule">GoogleComputeRegionNetworkFirewallPolicyWithRulesRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRule[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule">GoogleComputeRegionNetworkFirewallPolicyWithRulesRule</a>[]

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts">resetPorts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPorts` <a name="resetPorts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.resetPorts"></a>

```typescript
public resetPorts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput">portsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports">ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.portsInput"></a>

```typescript
public readonly portsInput: string[];
```

- *Type:* string[]

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.ports"></a>

```typescript
public readonly ports: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config">putLayer4Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag">putSrcSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups">resetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns">resetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes">resetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences">resetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups">resetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns">resetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes">resetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag">resetSrcSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences">resetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLayer4Config` <a name="putLayer4Config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config"></a>

```typescript
public putLayer4Config(value: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putLayer4Config.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]

---

##### `putSrcSecureTag` <a name="putSrcSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag"></a>

```typescript
public putSrcSecureTag(value: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.putSrcSecureTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]

---

##### `resetDestAddressGroups` <a name="resetDestAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestAddressGroups"></a>

```typescript
public resetDestAddressGroups(): void
```

##### `resetDestFqdns` <a name="resetDestFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestFqdns"></a>

```typescript
public resetDestFqdns(): void
```

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestIpRanges"></a>

```typescript
public resetDestIpRanges(): void
```

##### `resetDestRegionCodes` <a name="resetDestRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestRegionCodes"></a>

```typescript
public resetDestRegionCodes(): void
```

##### `resetDestThreatIntelligences` <a name="resetDestThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```typescript
public resetDestThreatIntelligences(): void
```

##### `resetSrcAddressGroups` <a name="resetSrcAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcAddressGroups"></a>

```typescript
public resetSrcAddressGroups(): void
```

##### `resetSrcFqdns` <a name="resetSrcFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcFqdns"></a>

```typescript
public resetSrcFqdns(): void
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```

##### `resetSrcRegionCodes` <a name="resetSrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcRegionCodes"></a>

```typescript
public resetSrcRegionCodes(): void
```

##### `resetSrcSecureTag` <a name="resetSrcSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcSecureTag"></a>

```typescript
public resetSrcSecureTag(): void
```

##### `resetSrcThreatIntelligences` <a name="resetSrcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```typescript
public resetSrcThreatIntelligences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config">layer4Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag">srcSecureTag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput">destAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput">destFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput">destRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput">destThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput">layer4ConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput">srcAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput">srcFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput">srcRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput">srcSecureTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput">srcThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups">destAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns">destFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes">destRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences">destThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups">srcAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns">srcFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences">srcThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `layer4Config`<sup>Required</sup> <a name="layer4Config" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4Config"></a>

```typescript
public readonly layer4Config: GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4ConfigList</a>

---

##### `srcSecureTag`<sup>Required</sup> <a name="srcSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTag"></a>

```typescript
public readonly srcSecureTag: GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList</a>

---

##### `destAddressGroupsInput`<sup>Optional</sup> <a name="destAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```typescript
public readonly destAddressGroupsInput: string[];
```

- *Type:* string[]

---

##### `destFqdnsInput`<sup>Optional</sup> <a name="destFqdnsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdnsInput"></a>

```typescript
public readonly destFqdnsInput: string[];
```

- *Type:* string[]

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRangesInput"></a>

```typescript
public readonly destIpRangesInput: string[];
```

- *Type:* string[]

---

##### `destRegionCodesInput`<sup>Optional</sup> <a name="destRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodesInput"></a>

```typescript
public readonly destRegionCodesInput: string[];
```

- *Type:* string[]

---

##### `destThreatIntelligencesInput`<sup>Optional</sup> <a name="destThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```typescript
public readonly destThreatIntelligencesInput: string[];
```

- *Type:* string[]

---

##### `layer4ConfigInput`<sup>Optional</sup> <a name="layer4ConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.layer4ConfigInput"></a>

```typescript
public readonly layer4ConfigInput: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchLayer4Config</a>[]

---

##### `srcAddressGroupsInput`<sup>Optional</sup> <a name="srcAddressGroupsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```typescript
public readonly srcAddressGroupsInput: string[];
```

- *Type:* string[]

---

##### `srcFqdnsInput`<sup>Optional</sup> <a name="srcFqdnsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdnsInput"></a>

```typescript
public readonly srcFqdnsInput: string[];
```

- *Type:* string[]

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `srcRegionCodesInput`<sup>Optional</sup> <a name="srcRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```typescript
public readonly srcRegionCodesInput: string[];
```

- *Type:* string[]

---

##### `srcSecureTagInput`<sup>Optional</sup> <a name="srcSecureTagInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcSecureTagInput"></a>

```typescript
public readonly srcSecureTagInput: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]

---

##### `srcThreatIntelligencesInput`<sup>Optional</sup> <a name="srcThreatIntelligencesInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```typescript
public readonly srcThreatIntelligencesInput: string[];
```

- *Type:* string[]

---

##### `destAddressGroups`<sup>Required</sup> <a name="destAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destAddressGroups"></a>

```typescript
public readonly destAddressGroups: string[];
```

- *Type:* string[]

---

##### `destFqdns`<sup>Required</sup> <a name="destFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destFqdns"></a>

```typescript
public readonly destFqdns: string[];
```

- *Type:* string[]

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `destRegionCodes`<sup>Required</sup> <a name="destRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destRegionCodes"></a>

```typescript
public readonly destRegionCodes: string[];
```

- *Type:* string[]

---

##### `destThreatIntelligences`<sup>Required</sup> <a name="destThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.destThreatIntelligences"></a>

```typescript
public readonly destThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `srcAddressGroups`<sup>Required</sup> <a name="srcAddressGroups" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcAddressGroups"></a>

```typescript
public readonly srcAddressGroups: string[];
```

- *Type:* string[]

---

##### `srcFqdns`<sup>Required</sup> <a name="srcFqdns" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcFqdns"></a>

```typescript
public readonly srcFqdns: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

---

##### `srcThreatIntelligences`<sup>Required</sup> <a name="srcThreatIntelligences" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```typescript
public readonly srcThreatIntelligences: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>[]

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchSrcSecureTag</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag">putTargetSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging">resetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetRuleName">resetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup">resetSecurityProfileGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag">resetTargetSecureTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts">resetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect">resetTlsInspect</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch"></a>

```typescript
public putMatch(value: GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a>

---

##### `putTargetSecureTag` <a name="putTargetSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag"></a>

```typescript
public putTargetSecureTag(value: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.putTargetSecureTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetEnableLogging` <a name="resetEnableLogging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetEnableLogging"></a>

```typescript
public resetEnableLogging(): void
```

##### `resetRuleName` <a name="resetRuleName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetRuleName"></a>

```typescript
public resetRuleName(): void
```

##### `resetSecurityProfileGroup` <a name="resetSecurityProfileGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetSecurityProfileGroup"></a>

```typescript
public resetSecurityProfileGroup(): void
```

##### `resetTargetSecureTag` <a name="resetTargetSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetSecureTag"></a>

```typescript
public resetTargetSecureTag(): void
```

##### `resetTargetServiceAccounts` <a name="resetTargetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTargetServiceAccounts"></a>

```typescript
public resetTargetServiceAccounts(): void
```

##### `resetTlsInspect` <a name="resetTlsInspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.resetTlsInspect"></a>

```typescript
public resetTlsInspect(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag">targetSecureTag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput">enableLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput">ruleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput">securityProfileGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput">targetSecureTagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput">targetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput">tlsInspectInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLogging">enableLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup">securityProfileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts">targetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect">tlsInspect</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule">GoogleComputeRegionNetworkFirewallPolicyWithRulesRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.match"></a>

```typescript
public readonly match: GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatchOutputReference</a>

---

##### `targetSecureTag`<sup>Required</sup> <a name="targetSecureTag" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTag"></a>

```typescript
public readonly targetSecureTag: GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLoggingInput`<sup>Optional</sup> <a name="enableLoggingInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLoggingInput"></a>

```typescript
public readonly enableLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleMatch</a>

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `ruleNameInput`<sup>Optional</sup> <a name="ruleNameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleNameInput"></a>

```typescript
public readonly ruleNameInput: string;
```

- *Type:* string

---

##### `securityProfileGroupInput`<sup>Optional</sup> <a name="securityProfileGroupInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroupInput"></a>

```typescript
public readonly securityProfileGroupInput: string;
```

- *Type:* string

---

##### `targetSecureTagInput`<sup>Optional</sup> <a name="targetSecureTagInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetSecureTagInput"></a>

```typescript
public readonly targetSecureTagInput: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>[]

---

##### `targetServiceAccountsInput`<sup>Optional</sup> <a name="targetServiceAccountsInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccountsInput"></a>

```typescript
public readonly targetServiceAccountsInput: string[];
```

- *Type:* string[]

---

##### `tlsInspectInput`<sup>Optional</sup> <a name="tlsInspectInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspectInput"></a>

```typescript
public readonly tlsInspectInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableLogging`<sup>Required</sup> <a name="enableLogging" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.enableLogging"></a>

```typescript
public readonly enableLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `securityProfileGroup`<sup>Required</sup> <a name="securityProfileGroup" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.securityProfileGroup"></a>

```typescript
public readonly securityProfileGroup: string;
```

- *Type:* string

---

##### `targetServiceAccounts`<sup>Required</sup> <a name="targetServiceAccounts" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.targetServiceAccounts"></a>

```typescript
public readonly targetServiceAccounts: string[];
```

- *Type:* string[]

---

##### `tlsInspect`<sup>Required</sup> <a name="tlsInspect" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.tlsInspect"></a>

```typescript
public readonly tlsInspect: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRule;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRule">GoogleComputeRegionNetworkFirewallPolicyWithRulesRule</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>[]

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag">GoogleComputeRegionNetworkFirewallPolicyWithRulesRuleTargetSecureTag</a>

---


### GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference <a name="GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionNetworkFirewallPolicyWithRules } from '@cdktf/provider-google-beta'

new googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionNetworkFirewallPolicyWithRules.GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts">GoogleComputeRegionNetworkFirewallPolicyWithRulesTimeouts</a>

---



