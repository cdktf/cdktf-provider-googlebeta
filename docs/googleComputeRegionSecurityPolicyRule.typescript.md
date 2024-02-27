# `googleComputeRegionSecurityPolicyRule` Submodule <a name="`googleComputeRegionSecurityPolicyRule` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionSecurityPolicyRule <a name="GoogleComputeRegionSecurityPolicyRule" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule google_compute_region_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

new googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule(scope: Construct, id: string, config: GoogleComputeRegionSecurityPolicyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig">GoogleComputeRegionSecurityPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig">GoogleComputeRegionSecurityPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putMatch">putMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch">putNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetNetworkMatch">resetNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetPreview">resetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatch` <a name="putMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putMatch"></a>

```typescript
public putMatch(value: GoogleComputeRegionSecurityPolicyRuleMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a>

---

##### `putNetworkMatch` <a name="putNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch"></a>

```typescript
public putNetworkMatch(value: GoogleComputeRegionSecurityPolicyRuleNetworkMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionSecurityPolicyRuleTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetNetworkMatch` <a name="resetNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetNetworkMatch"></a>

```typescript
public resetNetworkMatch(): void
```

##### `resetPreview` <a name="resetPreview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetPreview"></a>

```typescript
public resetPreview(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isConstruct"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformElement"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformResource"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRegionSecurityPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionSecurityPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionSecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionSecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.networkMatch">networkMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference">GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.matchInput">matchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.networkMatchInput">networkMatchInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.previewInput">previewInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.preview">preview</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.match"></a>

```typescript
public readonly match: GoogleComputeRegionSecurityPolicyRuleMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchOutputReference</a>

---

##### `networkMatch`<sup>Required</sup> <a name="networkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.networkMatch"></a>

```typescript
public readonly networkMatch: GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference">GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference">GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.matchInput"></a>

```typescript
public readonly matchInput: GoogleComputeRegionSecurityPolicyRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a>

---

##### `networkMatchInput`<sup>Optional</sup> <a name="networkMatchInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.networkMatchInput"></a>

```typescript
public readonly networkMatchInput: GoogleComputeRegionSecurityPolicyRuleNetworkMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a>

---

##### `previewInput`<sup>Optional</sup> <a name="previewInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.previewInput"></a>

```typescript
public readonly previewInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionSecurityPolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `preview`<sup>Required</sup> <a name="preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionSecurityPolicyRuleConfig <a name="GoogleComputeRegionSecurityPolicyRuleConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

const googleComputeRegionSecurityPolicyRuleConfig: googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.action">action</a></code> | <code>string</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.priority">priority</a></code> | <code>number</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created Region Security Policy rule should reside. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | The name of the security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#id GoogleComputeRegionSecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.match">match</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.networkMatch">networkMatch</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | network_match block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.preview">preview</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#project GoogleComputeRegionSecurityPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.

* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.

* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.

* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.

* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#action GoogleComputeRegionSecurityPolicyRule#action}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#priority GoogleComputeRegionSecurityPolicyRule#priority}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created Region Security Policy rule should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#region GoogleComputeRegionSecurityPolicyRule#region}

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

The name of the security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#security_policy GoogleComputeRegionSecurityPolicyRule#security_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#description GoogleComputeRegionSecurityPolicyRule#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#id GoogleComputeRegionSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.match"></a>

```typescript
public readonly match: GoogleComputeRegionSecurityPolicyRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#match GoogleComputeRegionSecurityPolicyRule#match}

---

##### `networkMatch`<sup>Optional</sup> <a name="networkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.networkMatch"></a>

```typescript
public readonly networkMatch: GoogleComputeRegionSecurityPolicyRuleNetworkMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a>

network_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#network_match GoogleComputeRegionSecurityPolicyRule#network_match}

---

##### `preview`<sup>Optional</sup> <a name="preview" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.preview"></a>

```typescript
public readonly preview: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#preview GoogleComputeRegionSecurityPolicyRule#preview}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#project GoogleComputeRegionSecurityPolicyRule#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionSecurityPolicyRuleTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#timeouts GoogleComputeRegionSecurityPolicyRule#timeouts}

---

### GoogleComputeRegionSecurityPolicyRuleMatch <a name="GoogleComputeRegionSecurityPolicyRuleMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

const googleComputeRegionSecurityPolicyRuleMatch: googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | Preconfigured versioned expression. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.config"></a>

```typescript
public readonly config: GoogleComputeRegionSecurityPolicyRuleMatchConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#config GoogleComputeRegionSecurityPolicyRule#config}

---

##### `versionedExpr`<sup>Optional</sup> <a name="versionedExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#versioned_expr GoogleComputeRegionSecurityPolicyRule#versioned_expr}

---

### GoogleComputeRegionSecurityPolicyRuleMatchConfig <a name="GoogleComputeRegionSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

const googleComputeRegionSecurityPolicyRuleMatchConfig: googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}

---

### GoogleComputeRegionSecurityPolicyRuleNetworkMatch <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatch" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

const googleComputeRegionSecurityPolicyRuleNetworkMatch: googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.destPorts">destPorts</a></code> | <code>string[]</code> | Destination port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | IPv4 protocol / IPv6 next header (after extension headers). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcAsns">srcAsns</a></code> | <code>number[]</code> | BGP Autonomous System Number associated with the source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcPorts">srcPorts</a></code> | <code>string[]</code> | Source port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.userDefinedFields">userDefinedFields</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>[]</code> | user_defined_fields block. |

---

##### `destIpRanges`<sup>Optional</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#dest_ip_ranges GoogleComputeRegionSecurityPolicyRule#dest_ip_ranges}

---

##### `destPorts`<sup>Optional</sup> <a name="destPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.destPorts"></a>

```typescript
public readonly destPorts: string[];
```

- *Type:* string[]

Destination port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#dest_ports GoogleComputeRegionSecurityPolicyRule#dest_ports}

---

##### `ipProtocols`<sup>Optional</sup> <a name="ipProtocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

IPv4 protocol / IPv6 next header (after extension headers).

Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#ip_protocols GoogleComputeRegionSecurityPolicyRule#ip_protocols}

---

##### `srcAsns`<sup>Optional</sup> <a name="srcAsns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcAsns"></a>

```typescript
public readonly srcAsns: number[];
```

- *Type:* number[]

BGP Autonomous System Number associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#src_asns GoogleComputeRegionSecurityPolicyRule#src_asns}

---

##### `srcIpRanges`<sup>Optional</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#src_ip_ranges GoogleComputeRegionSecurityPolicyRule#src_ip_ranges}

---

##### `srcPorts`<sup>Optional</sup> <a name="srcPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcPorts"></a>

```typescript
public readonly srcPorts: string[];
```

- *Type:* string[]

Source port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#src_ports GoogleComputeRegionSecurityPolicyRule#src_ports}

---

##### `srcRegionCodes`<sup>Optional</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#src_region_codes GoogleComputeRegionSecurityPolicyRule#src_region_codes}

---

##### `userDefinedFields`<sup>Optional</sup> <a name="userDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch.property.userDefinedFields"></a>

```typescript
public readonly userDefinedFields: IResolvable | GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>[]

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#user_defined_fields GoogleComputeRegionSecurityPolicyRule#user_defined_fields}

---

### GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

const googleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields: googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.name">name</a></code> | <code>string</code> | Name of the user-defined field, as given in the definition. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.values">values</a></code> | <code>string[]</code> | Matching values of the field. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the user-defined field, as given in the definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#name GoogleComputeRegionSecurityPolicyRule#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Matching values of the field.

Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#values GoogleComputeRegionSecurityPolicyRule#values}

---

### GoogleComputeRegionSecurityPolicyRuleTimeouts <a name="GoogleComputeRegionSecurityPolicyRuleTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

const googleComputeRegionSecurityPolicyRuleTimeouts: googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#create GoogleComputeRegionSecurityPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#delete GoogleComputeRegionSecurityPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#update GoogleComputeRegionSecurityPolicyRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#create GoogleComputeRegionSecurityPolicyRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#delete GoogleComputeRegionSecurityPolicyRule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/5.18.0/docs/resources/google_compute_region_security_policy_rule#update GoogleComputeRegionSecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

new googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionSecurityPolicyRuleMatchConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a>

---


### GoogleComputeRegionSecurityPolicyRuleMatchOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

new googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">resetVersionedExpr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```typescript
public putConfig(value: GoogleComputeRegionSecurityPolicyRuleMatchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```typescript
public resetConfig(): void
```

##### `resetVersionedExpr` <a name="resetVersionedExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```typescript
public resetVersionedExpr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">versionedExprInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExpr">versionedExpr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.config"></a>

```typescript
public readonly config: GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference">GoogleComputeRegionSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```typescript
public readonly configInput: GoogleComputeRegionSecurityPolicyRuleMatchConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchConfig">GoogleComputeRegionSecurityPolicyRuleMatchConfig</a>

---

##### `versionedExprInput`<sup>Optional</sup> <a name="versionedExprInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```typescript
public readonly versionedExprInput: string;
```

- *Type:* string

---

##### `versionedExpr`<sup>Required</sup> <a name="versionedExpr" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```typescript
public readonly versionedExpr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionSecurityPolicyRuleMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleMatch">GoogleComputeRegionSecurityPolicyRuleMatch</a>

---


### GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

new googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.putUserDefinedFields">putUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestIpRanges">resetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestPorts">resetDestPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetIpProtocols">resetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcAsns">resetSrcAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcIpRanges">resetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcPorts">resetSrcPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcRegionCodes">resetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetUserDefinedFields">resetUserDefinedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUserDefinedFields` <a name="putUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.putUserDefinedFields"></a>

```typescript
public putUserDefinedFields(value: IResolvable | GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.putUserDefinedFields.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>[]

---

##### `resetDestIpRanges` <a name="resetDestIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestIpRanges"></a>

```typescript
public resetDestIpRanges(): void
```

##### `resetDestPorts` <a name="resetDestPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestPorts"></a>

```typescript
public resetDestPorts(): void
```

##### `resetIpProtocols` <a name="resetIpProtocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetIpProtocols"></a>

```typescript
public resetIpProtocols(): void
```

##### `resetSrcAsns` <a name="resetSrcAsns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcAsns"></a>

```typescript
public resetSrcAsns(): void
```

##### `resetSrcIpRanges` <a name="resetSrcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcIpRanges"></a>

```typescript
public resetSrcIpRanges(): void
```

##### `resetSrcPorts` <a name="resetSrcPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcPorts"></a>

```typescript
public resetSrcPorts(): void
```

##### `resetSrcRegionCodes` <a name="resetSrcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcRegionCodes"></a>

```typescript
public resetSrcRegionCodes(): void
```

##### `resetUserDefinedFields` <a name="resetUserDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetUserDefinedFields"></a>

```typescript
public resetUserDefinedFields(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFields">userDefinedFields</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRangesInput">destIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPortsInput">destPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocolsInput">ipProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsnsInput">srcAsnsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRangesInput">srcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPortsInput">srcPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodesInput">srcRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFieldsInput">userDefinedFieldsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRanges">destIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPorts">destPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocols">ipProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsns">srcAsns</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRanges">srcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPorts">srcPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodes">srcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `userDefinedFields`<sup>Required</sup> <a name="userDefinedFields" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFields"></a>

```typescript
public readonly userDefinedFields: GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList</a>

---

##### `destIpRangesInput`<sup>Optional</sup> <a name="destIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRangesInput"></a>

```typescript
public readonly destIpRangesInput: string[];
```

- *Type:* string[]

---

##### `destPortsInput`<sup>Optional</sup> <a name="destPortsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPortsInput"></a>

```typescript
public readonly destPortsInput: string[];
```

- *Type:* string[]

---

##### `ipProtocolsInput`<sup>Optional</sup> <a name="ipProtocolsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocolsInput"></a>

```typescript
public readonly ipProtocolsInput: string[];
```

- *Type:* string[]

---

##### `srcAsnsInput`<sup>Optional</sup> <a name="srcAsnsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsnsInput"></a>

```typescript
public readonly srcAsnsInput: number[];
```

- *Type:* number[]

---

##### `srcIpRangesInput`<sup>Optional</sup> <a name="srcIpRangesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRangesInput"></a>

```typescript
public readonly srcIpRangesInput: string[];
```

- *Type:* string[]

---

##### `srcPortsInput`<sup>Optional</sup> <a name="srcPortsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPortsInput"></a>

```typescript
public readonly srcPortsInput: string[];
```

- *Type:* string[]

---

##### `srcRegionCodesInput`<sup>Optional</sup> <a name="srcRegionCodesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodesInput"></a>

```typescript
public readonly srcRegionCodesInput: string[];
```

- *Type:* string[]

---

##### `userDefinedFieldsInput`<sup>Optional</sup> <a name="userDefinedFieldsInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFieldsInput"></a>

```typescript
public readonly userDefinedFieldsInput: IResolvable | GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>[]

---

##### `destIpRanges`<sup>Required</sup> <a name="destIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRanges"></a>

```typescript
public readonly destIpRanges: string[];
```

- *Type:* string[]

---

##### `destPorts`<sup>Required</sup> <a name="destPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPorts"></a>

```typescript
public readonly destPorts: string[];
```

- *Type:* string[]

---

##### `ipProtocols`<sup>Required</sup> <a name="ipProtocols" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocols"></a>

```typescript
public readonly ipProtocols: string[];
```

- *Type:* string[]

---

##### `srcAsns`<sup>Required</sup> <a name="srcAsns" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsns"></a>

```typescript
public readonly srcAsns: number[];
```

- *Type:* number[]

---

##### `srcIpRanges`<sup>Required</sup> <a name="srcIpRanges" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRanges"></a>

```typescript
public readonly srcIpRanges: string[];
```

- *Type:* string[]

---

##### `srcPorts`<sup>Required</sup> <a name="srcPorts" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPorts"></a>

```typescript
public readonly srcPorts: string[];
```

- *Type:* string[]

---

##### `srcRegionCodes`<sup>Required</sup> <a name="srcRegionCodes" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodes"></a>

```typescript
public readonly srcRegionCodes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionSecurityPolicyRuleNetworkMatch;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatch">GoogleComputeRegionSecurityPolicyRuleNetworkMatch</a>

---


### GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

new googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.get"></a>

```typescript
public get(index: number): GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>[]

---


### GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

new googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields">GoogleComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields</a>

---


### GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference <a name="GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionSecurityPolicyRule } from '@cdktf/provider-google-beta'

new googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionSecurityPolicyRuleTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionSecurityPolicyRule.GoogleComputeRegionSecurityPolicyRuleTimeouts">GoogleComputeRegionSecurityPolicyRuleTimeouts</a>

---



