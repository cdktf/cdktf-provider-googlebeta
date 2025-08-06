# `googleApigeeSecurityAction` Submodule <a name="`googleApigeeSecurityAction` Submodule" id="@cdktf/provider-google-beta.googleApigeeSecurityAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeSecurityAction <a name="GoogleApigeeSecurityAction" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action google_apigee_security_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

new googleApigeeSecurityAction.GoogleApigeeSecurityAction(scope: Construct, id: string, config: GoogleApigeeSecurityActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig">GoogleApigeeSecurityActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig">GoogleApigeeSecurityActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow">putAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig">putConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny">putDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag">putFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetAllow">resetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetApiProxies">resetApiProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDeny">resetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetFlag">resetFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllow` <a name="putAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow"></a>

```typescript
public putAllow(value: GoogleApigeeSecurityActionAllow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---

##### `putConditionConfig` <a name="putConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig"></a>

```typescript
public putConditionConfig(value: GoogleApigeeSecurityActionConditionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putConditionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---

##### `putDeny` <a name="putDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny"></a>

```typescript
public putDeny(value: GoogleApigeeSecurityActionDeny): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---

##### `putFlag` <a name="putFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag"></a>

```typescript
public putFlag(value: GoogleApigeeSecurityActionFlag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApigeeSecurityActionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

---

##### `resetAllow` <a name="resetAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetAllow"></a>

```typescript
public resetAllow(): void
```

##### `resetApiProxies` <a name="resetApiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetApiProxies"></a>

```typescript
public resetApiProxies(): void
```

##### `resetDeny` <a name="resetDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDeny"></a>

```typescript
public resetDeny(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetExpireTime"></a>

```typescript
public resetExpireTime(): void
```

##### `resetFlag` <a name="resetFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetFlag"></a>

```typescript
public resetFlag(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.resetTtl"></a>

```typescript
public resetTtl(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleApigeeSecurityAction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleApigeeSecurityAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeSecurityAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeSecurityAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleApigeeSecurityAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference">GoogleApigeeSecurityActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference">GoogleApigeeSecurityActionConditionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference">GoogleApigeeSecurityActionDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference">GoogleApigeeSecurityActionFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference">GoogleApigeeSecurityActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allowInput">allowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxiesInput">apiProxiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfigInput">conditionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.denyInput">denyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTimeInput">expireTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flagInput">flagInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgIdInput">orgIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionIdInput">securityActionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxies">apiProxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTime">expireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgId">orgId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionId">securityActionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allow`<sup>Required</sup> <a name="allow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allow"></a>

```typescript
public readonly allow: GoogleApigeeSecurityActionAllowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference">GoogleApigeeSecurityActionAllowOutputReference</a>

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfig"></a>

```typescript
public readonly conditionConfig: GoogleApigeeSecurityActionConditionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference">GoogleApigeeSecurityActionConditionConfigOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `deny`<sup>Required</sup> <a name="deny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.deny"></a>

```typescript
public readonly deny: GoogleApigeeSecurityActionDenyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference">GoogleApigeeSecurityActionDenyOutputReference</a>

---

##### `flag`<sup>Required</sup> <a name="flag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flag"></a>

```typescript
public readonly flag: GoogleApigeeSecurityActionFlagOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference">GoogleApigeeSecurityActionFlagOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeSecurityActionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference">GoogleApigeeSecurityActionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `allowInput`<sup>Optional</sup> <a name="allowInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.allowInput"></a>

```typescript
public readonly allowInput: GoogleApigeeSecurityActionAllow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---

##### `apiProxiesInput`<sup>Optional</sup> <a name="apiProxiesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxiesInput"></a>

```typescript
public readonly apiProxiesInput: string[];
```

- *Type:* string[]

---

##### `conditionConfigInput`<sup>Optional</sup> <a name="conditionConfigInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.conditionConfigInput"></a>

```typescript
public readonly conditionConfigInput: GoogleApigeeSecurityActionConditionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---

##### `denyInput`<sup>Optional</sup> <a name="denyInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.denyInput"></a>

```typescript
public readonly denyInput: GoogleApigeeSecurityActionDeny;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTimeInput"></a>

```typescript
public readonly expireTimeInput: string;
```

- *Type:* string

---

##### `flagInput`<sup>Optional</sup> <a name="flagInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.flagInput"></a>

```typescript
public readonly flagInput: GoogleApigeeSecurityActionFlag;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `orgIdInput`<sup>Optional</sup> <a name="orgIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgIdInput"></a>

```typescript
public readonly orgIdInput: string;
```

- *Type:* string

---

##### `securityActionIdInput`<sup>Optional</sup> <a name="securityActionIdInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionIdInput"></a>

```typescript
public readonly securityActionIdInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApigeeSecurityActionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `apiProxies`<sup>Required</sup> <a name="apiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.apiProxies"></a>

```typescript
public readonly apiProxies: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.securityActionId"></a>

```typescript
public readonly securityActionId: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeSecurityActionAllow <a name="GoogleApigeeSecurityActionAllow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

const googleApigeeSecurityActionAllow: googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow = { ... }
```


### GoogleApigeeSecurityActionConditionConfig <a name="GoogleApigeeSecurityActionConditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

const googleApigeeSecurityActionConditionConfig: googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.accessTokens">accessTokens</a></code> | <code>string[]</code> | A list of accessTokens. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiKeys">apiKeys</a></code> | <code>string[]</code> | A list of API keys. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiProducts">apiProducts</a></code> | <code>string[]</code> | A list of API Products. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.asns">asns</a></code> | <code>string[]</code> | A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.botReasons">botReasons</a></code> | <code>string[]</code> | A list of Bot Reasons. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developerApps">developerApps</a></code> | <code>string[]</code> | A list of developer apps. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developers">developers</a></code> | <code>string[]</code> | A list of developers. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.httpMethods">httpMethods</a></code> | <code>string[]</code> | Act only on particular HTTP methods. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.ipAddressRanges">ipAddressRanges</a></code> | <code>string[]</code> | A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.regionCodes">regionCodes</a></code> | <code>string[]</code> | A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.userAgents">userAgents</a></code> | <code>string[]</code> | A list of user agents to deny. We look for exact matches. Limit 50 per action. |

---

##### `accessTokens`<sup>Optional</sup> <a name="accessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.accessTokens"></a>

```typescript
public readonly accessTokens: string[];
```

- *Type:* string[]

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#access_tokens GoogleApigeeSecurityAction#access_tokens}

---

##### `apiKeys`<sup>Optional</sup> <a name="apiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiKeys"></a>

```typescript
public readonly apiKeys: string[];
```

- *Type:* string[]

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#api_keys GoogleApigeeSecurityAction#api_keys}

---

##### `apiProducts`<sup>Optional</sup> <a name="apiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.apiProducts"></a>

```typescript
public readonly apiProducts: string[];
```

- *Type:* string[]

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#api_products GoogleApigeeSecurityAction#api_products}

---

##### `asns`<sup>Optional</sup> <a name="asns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.asns"></a>

```typescript
public readonly asns: string[];
```

- *Type:* string[]

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#asns GoogleApigeeSecurityAction#asns}

---

##### `botReasons`<sup>Optional</sup> <a name="botReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.botReasons"></a>

```typescript
public readonly botReasons: string[];
```

- *Type:* string[]

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#bot_reasons GoogleApigeeSecurityAction#bot_reasons}

---

##### `developerApps`<sup>Optional</sup> <a name="developerApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developerApps"></a>

```typescript
public readonly developerApps: string[];
```

- *Type:* string[]

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#developer_apps GoogleApigeeSecurityAction#developer_apps}

---

##### `developers`<sup>Optional</sup> <a name="developers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.developers"></a>

```typescript
public readonly developers: string[];
```

- *Type:* string[]

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#developers GoogleApigeeSecurityAction#developers}

---

##### `httpMethods`<sup>Optional</sup> <a name="httpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.httpMethods"></a>

```typescript
public readonly httpMethods: string[];
```

- *Type:* string[]

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#http_methods GoogleApigeeSecurityAction#http_methods}

---

##### `ipAddressRanges`<sup>Optional</sup> <a name="ipAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.ipAddressRanges"></a>

```typescript
public readonly ipAddressRanges: string[];
```

- *Type:* string[]

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#ip_address_ranges GoogleApigeeSecurityAction#ip_address_ranges}

---

##### `regionCodes`<sup>Optional</sup> <a name="regionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.regionCodes"></a>

```typescript
public readonly regionCodes: string[];
```

- *Type:* string[]

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#region_codes GoogleApigeeSecurityAction#region_codes}

---

##### `userAgents`<sup>Optional</sup> <a name="userAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig.property.userAgents"></a>

```typescript
public readonly userAgents: string[];
```

- *Type:* string[]

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#user_agents GoogleApigeeSecurityAction#user_agents}

---

### GoogleApigeeSecurityActionConfig <a name="GoogleApigeeSecurityActionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

const googleApigeeSecurityActionConfig: googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.conditionConfig">conditionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.envId">envId</a></code> | <code>string</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.orgId">orgId</a></code> | <code>string</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.securityActionId">securityActionId</a></code> | <code>string</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.state">state</a></code> | <code>string</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.allow">allow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.apiProxies">apiProxies</a></code> | <code>string[]</code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.deny">deny</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.description">description</a></code> | <code>string</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.expireTime">expireTime</a></code> | <code>string</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.flag">flag</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.ttl">ttl</a></code> | <code>string</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `conditionConfig`<sup>Required</sup> <a name="conditionConfig" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.conditionConfig"></a>

```typescript
public readonly conditionConfig: GoogleApigeeSecurityActionConditionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#condition_config GoogleApigeeSecurityAction#condition_config}

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#env_id GoogleApigeeSecurityAction#env_id}

---

##### `orgId`<sup>Required</sup> <a name="orgId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.orgId"></a>

```typescript
public readonly orgId: string;
```

- *Type:* string

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#org_id GoogleApigeeSecurityAction#org_id}

---

##### `securityActionId`<sup>Required</sup> <a name="securityActionId" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.securityActionId"></a>

```typescript
public readonly securityActionId: string;
```

- *Type:* string

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#security_action_id GoogleApigeeSecurityAction#security_action_id}

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#state GoogleApigeeSecurityAction#state}

---

##### `allow`<sup>Optional</sup> <a name="allow" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.allow"></a>

```typescript
public readonly allow: GoogleApigeeSecurityActionAllow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#allow GoogleApigeeSecurityAction#allow}

---

##### `apiProxies`<sup>Optional</sup> <a name="apiProxies" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.apiProxies"></a>

```typescript
public readonly apiProxies: string[];
```

- *Type:* string[]

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#api_proxies GoogleApigeeSecurityAction#api_proxies}

---

##### `deny`<sup>Optional</sup> <a name="deny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.deny"></a>

```typescript
public readonly deny: GoogleApigeeSecurityActionDeny;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#deny GoogleApigeeSecurityAction#deny}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#description GoogleApigeeSecurityAction#description}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.expireTime"></a>

```typescript
public readonly expireTime: string;
```

- *Type:* string

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#expire_time GoogleApigeeSecurityAction#expire_time}

---

##### `flag`<sup>Optional</sup> <a name="flag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.flag"></a>

```typescript
public readonly flag: GoogleApigeeSecurityActionFlag;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#flag GoogleApigeeSecurityAction#flag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#id GoogleApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeSecurityActionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#timeouts GoogleApigeeSecurityAction#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#ttl GoogleApigeeSecurityAction#ttl}

---

### GoogleApigeeSecurityActionDeny <a name="GoogleApigeeSecurityActionDeny" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

const googleApigeeSecurityActionDeny: googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.property.responseCode">responseCode</a></code> | <code>number</code> | The HTTP response code if the Action = DENY. |

---

##### `responseCode`<sup>Optional</sup> <a name="responseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#response_code GoogleApigeeSecurityAction#response_code}

---

### GoogleApigeeSecurityActionFlag <a name="GoogleApigeeSecurityActionFlag" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

const googleApigeeSecurityActionFlag: googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.property.headers">headers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>[]</code> | headers block. |

---

##### `headers`<sup>Optional</sup> <a name="headers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag.property.headers"></a>

```typescript
public readonly headers: IResolvable | GoogleApigeeSecurityActionFlagHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>[]

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#headers GoogleApigeeSecurityAction#headers}

---

### GoogleApigeeSecurityActionFlagHeaders <a name="GoogleApigeeSecurityActionFlagHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

const googleApigeeSecurityActionFlagHeaders: googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.name">name</a></code> | <code>string</code> | The header name to be sent to the target. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.value">value</a></code> | <code>string</code> | The header value to be sent to the target. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The header name to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#name GoogleApigeeSecurityAction#name}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The header value to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#value GoogleApigeeSecurityAction#value}

---

### GoogleApigeeSecurityActionTimeouts <a name="GoogleApigeeSecurityActionTimeouts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

const googleApigeeSecurityActionTimeouts: googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#create GoogleApigeeSecurityAction#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#delete GoogleApigeeSecurityAction#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#create GoogleApigeeSecurityAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.47.0/docs/resources/google_apigee_security_action#delete GoogleApigeeSecurityAction#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeSecurityActionAllowOutputReference <a name="GoogleApigeeSecurityActionAllowOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

new googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeSecurityActionAllow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionAllow">GoogleApigeeSecurityActionAllow</a>

---


### GoogleApigeeSecurityActionConditionConfigOutputReference <a name="GoogleApigeeSecurityActionConditionConfigOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

new googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens">resetAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiKeys">resetApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiProducts">resetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAsns">resetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetBotReasons">resetBotReasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps">resetDeveloperApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDevelopers">resetDevelopers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods">resetHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges">resetIpAddressRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes">resetRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetUserAgents">resetUserAgents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessTokens` <a name="resetAccessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens"></a>

```typescript
public resetAccessTokens(): void
```

##### `resetApiKeys` <a name="resetApiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiKeys"></a>

```typescript
public resetApiKeys(): void
```

##### `resetApiProducts` <a name="resetApiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetApiProducts"></a>

```typescript
public resetApiProducts(): void
```

##### `resetAsns` <a name="resetAsns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetAsns"></a>

```typescript
public resetAsns(): void
```

##### `resetBotReasons` <a name="resetBotReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetBotReasons"></a>

```typescript
public resetBotReasons(): void
```

##### `resetDeveloperApps` <a name="resetDeveloperApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps"></a>

```typescript
public resetDeveloperApps(): void
```

##### `resetDevelopers` <a name="resetDevelopers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetDevelopers"></a>

```typescript
public resetDevelopers(): void
```

##### `resetHttpMethods` <a name="resetHttpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods"></a>

```typescript
public resetHttpMethods(): void
```

##### `resetIpAddressRanges` <a name="resetIpAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges"></a>

```typescript
public resetIpAddressRanges(): void
```

##### `resetRegionCodes` <a name="resetRegionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes"></a>

```typescript
public resetRegionCodes(): void
```

##### `resetUserAgents` <a name="resetUserAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.resetUserAgents"></a>

```typescript
public resetUserAgents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput">accessTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput">apiKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput">apiProductsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asnsInput">asnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput">botReasonsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput">developerAppsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developersInput">developersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput">httpMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput">ipAddressRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput">regionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput">userAgentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokens">accessTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeys">apiKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProducts">apiProducts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asns">asns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasons">botReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerApps">developerApps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developers">developers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethods">httpMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges">ipAddressRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodes">regionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgents">userAgents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokensInput`<sup>Optional</sup> <a name="accessTokensInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput"></a>

```typescript
public readonly accessTokensInput: string[];
```

- *Type:* string[]

---

##### `apiKeysInput`<sup>Optional</sup> <a name="apiKeysInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput"></a>

```typescript
public readonly apiKeysInput: string[];
```

- *Type:* string[]

---

##### `apiProductsInput`<sup>Optional</sup> <a name="apiProductsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput"></a>

```typescript
public readonly apiProductsInput: string[];
```

- *Type:* string[]

---

##### `asnsInput`<sup>Optional</sup> <a name="asnsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asnsInput"></a>

```typescript
public readonly asnsInput: string[];
```

- *Type:* string[]

---

##### `botReasonsInput`<sup>Optional</sup> <a name="botReasonsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput"></a>

```typescript
public readonly botReasonsInput: string[];
```

- *Type:* string[]

---

##### `developerAppsInput`<sup>Optional</sup> <a name="developerAppsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput"></a>

```typescript
public readonly developerAppsInput: string[];
```

- *Type:* string[]

---

##### `developersInput`<sup>Optional</sup> <a name="developersInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developersInput"></a>

```typescript
public readonly developersInput: string[];
```

- *Type:* string[]

---

##### `httpMethodsInput`<sup>Optional</sup> <a name="httpMethodsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput"></a>

```typescript
public readonly httpMethodsInput: string[];
```

- *Type:* string[]

---

##### `ipAddressRangesInput`<sup>Optional</sup> <a name="ipAddressRangesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput"></a>

```typescript
public readonly ipAddressRangesInput: string[];
```

- *Type:* string[]

---

##### `regionCodesInput`<sup>Optional</sup> <a name="regionCodesInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput"></a>

```typescript
public readonly regionCodesInput: string[];
```

- *Type:* string[]

---

##### `userAgentsInput`<sup>Optional</sup> <a name="userAgentsInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput"></a>

```typescript
public readonly userAgentsInput: string[];
```

- *Type:* string[]

---

##### `accessTokens`<sup>Required</sup> <a name="accessTokens" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.accessTokens"></a>

```typescript
public readonly accessTokens: string[];
```

- *Type:* string[]

---

##### `apiKeys`<sup>Required</sup> <a name="apiKeys" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiKeys"></a>

```typescript
public readonly apiKeys: string[];
```

- *Type:* string[]

---

##### `apiProducts`<sup>Required</sup> <a name="apiProducts" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.apiProducts"></a>

```typescript
public readonly apiProducts: string[];
```

- *Type:* string[]

---

##### `asns`<sup>Required</sup> <a name="asns" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.asns"></a>

```typescript
public readonly asns: string[];
```

- *Type:* string[]

---

##### `botReasons`<sup>Required</sup> <a name="botReasons" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.botReasons"></a>

```typescript
public readonly botReasons: string[];
```

- *Type:* string[]

---

##### `developerApps`<sup>Required</sup> <a name="developerApps" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developerApps"></a>

```typescript
public readonly developerApps: string[];
```

- *Type:* string[]

---

##### `developers`<sup>Required</sup> <a name="developers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.developers"></a>

```typescript
public readonly developers: string[];
```

- *Type:* string[]

---

##### `httpMethods`<sup>Required</sup> <a name="httpMethods" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.httpMethods"></a>

```typescript
public readonly httpMethods: string[];
```

- *Type:* string[]

---

##### `ipAddressRanges`<sup>Required</sup> <a name="ipAddressRanges" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges"></a>

```typescript
public readonly ipAddressRanges: string[];
```

- *Type:* string[]

---

##### `regionCodes`<sup>Required</sup> <a name="regionCodes" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.regionCodes"></a>

```typescript
public readonly regionCodes: string[];
```

- *Type:* string[]

---

##### `userAgents`<sup>Required</sup> <a name="userAgents" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.userAgents"></a>

```typescript
public readonly userAgents: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeSecurityActionConditionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionConditionConfig">GoogleApigeeSecurityActionConditionConfig</a>

---


### GoogleApigeeSecurityActionDenyOutputReference <a name="GoogleApigeeSecurityActionDenyOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

new googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resetResponseCode">resetResponseCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResponseCode` <a name="resetResponseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.resetResponseCode"></a>

```typescript
public resetResponseCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: number;
```

- *Type:* number

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDenyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeSecurityActionDeny;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionDeny">GoogleApigeeSecurityActionDeny</a>

---


### GoogleApigeeSecurityActionFlagHeadersList <a name="GoogleApigeeSecurityActionFlagHeadersList" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

new googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get"></a>

```typescript
public get(index: number): GoogleApigeeSecurityActionFlagHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeSecurityActionFlagHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>[]

---


### GoogleApigeeSecurityActionFlagHeadersOutputReference <a name="GoogleApigeeSecurityActionFlagHeadersOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

new googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeSecurityActionFlagHeaders;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>

---


### GoogleApigeeSecurityActionFlagOutputReference <a name="GoogleApigeeSecurityActionFlagOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

new googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders">putHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resetHeaders">resetHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaders` <a name="putHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders"></a>

```typescript
public putHeaders(value: IResolvable | GoogleApigeeSecurityActionFlagHeaders[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.putHeaders.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>[]

---

##### `resetHeaders` <a name="resetHeaders" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.resetHeaders"></a>

```typescript
public resetHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headers">headers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList">GoogleApigeeSecurityActionFlagHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headersInput">headersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headers"></a>

```typescript
public readonly headers: GoogleApigeeSecurityActionFlagHeadersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeadersList">GoogleApigeeSecurityActionFlagHeadersList</a>

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.headersInput"></a>

```typescript
public readonly headersInput: IResolvable | GoogleApigeeSecurityActionFlagHeaders[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagHeaders">GoogleApigeeSecurityActionFlagHeaders</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleApigeeSecurityActionFlag;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionFlag">GoogleApigeeSecurityActionFlag</a>

---


### GoogleApigeeSecurityActionTimeoutsOutputReference <a name="GoogleApigeeSecurityActionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApigeeSecurityAction } from '@cdktf/provider-google-beta'

new googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeSecurityActionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleApigeeSecurityAction.GoogleApigeeSecurityActionTimeouts">GoogleApigeeSecurityActionTimeouts</a>

---



