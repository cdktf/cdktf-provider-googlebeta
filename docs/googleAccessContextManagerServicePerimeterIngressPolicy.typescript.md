# `googleAccessContextManagerServicePerimeterIngressPolicy` Submodule <a name="`googleAccessContextManagerServicePerimeterIngressPolicy` Submodule" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAccessContextManagerServicePerimeterIngressPolicy <a name="GoogleAccessContextManagerServicePerimeterIngressPolicy" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy google_access_context_manager_service_perimeter_ingress_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy(scope: Construct, id: string, config: GoogleAccessContextManagerServicePerimeterIngressPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig">GoogleAccessContextManagerServicePerimeterIngressPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig">GoogleAccessContextManagerServicePerimeterIngressPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressFrom">putIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressTo">putIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetIngressFrom">resetIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetIngressTo">resetIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngressFrom` <a name="putIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressFrom"></a>

```typescript
public putIngressFrom(value: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

---

##### `putIngressTo` <a name="putIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressTo"></a>

```typescript
public putIngressTo(value: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putIngressTo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngressFrom` <a name="resetIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetIngressFrom"></a>

```typescript
public resetIngressFrom(): void
```

##### `resetIngressTo` <a name="resetIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetIngressTo"></a>

```typescript
public resetIngressTo(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.resetTitle"></a>

```typescript
public resetTitle(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterIngressPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isConstruct"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformElement"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformResource"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAccessContextManagerServicePerimeterIngressPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAccessContextManagerServicePerimeterIngressPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAccessContextManagerServicePerimeterIngressPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAccessContextManagerServicePerimeterIngressPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.accessPolicyId">accessPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressFromInput">ingressFromInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressToInput">ingressToInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.perimeterInput">perimeterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.perimeter">perimeter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessPolicyId`<sup>Required</sup> <a name="accessPolicyId" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.accessPolicyId"></a>

```typescript
public readonly accessPolicyId: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `ingressFrom`<sup>Required</sup> <a name="ingressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressFrom"></a>

```typescript
public readonly ingressFrom: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference</a>

---

##### `ingressTo`<sup>Required</sup> <a name="ingressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressTo"></a>

```typescript
public readonly ingressTo: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressFromInput`<sup>Optional</sup> <a name="ingressFromInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressFromInput"></a>

```typescript
public readonly ingressFromInput: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

---

##### `ingressToInput`<sup>Optional</sup> <a name="ingressToInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.ingressToInput"></a>

```typescript
public readonly ingressToInput: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

---

##### `perimeterInput`<sup>Optional</sup> <a name="perimeterInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.perimeterInput"></a>

```typescript
public readonly perimeterInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.perimeter"></a>

```typescript
public readonly perimeter: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAccessContextManagerServicePerimeterIngressPolicyConfig <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyConfig" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterIngressPolicyConfig: googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.perimeter">perimeter</a></code> | <code>string</code> | The name of the Service Perimeter to add this resource to. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#id GoogleAccessContextManagerServicePerimeterIngressPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressFrom">ingressFrom</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | ingress_from block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressTo">ingressTo</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | ingress_to block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.title">title</a></code> | <code>string</code> | Human readable title. Must be unique within the perimeter. Does not affect behavior. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `perimeter`<sup>Required</sup> <a name="perimeter" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.perimeter"></a>

```typescript
public readonly perimeter: string;
```

- *Type:* string

The name of the Service Perimeter to add this resource to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#perimeter GoogleAccessContextManagerServicePerimeterIngressPolicy#perimeter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#id GoogleAccessContextManagerServicePerimeterIngressPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressFrom`<sup>Optional</sup> <a name="ingressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressFrom"></a>

```typescript
public readonly ingressFrom: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

ingress_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#ingress_from GoogleAccessContextManagerServicePerimeterIngressPolicy#ingress_from}

---

##### `ingressTo`<sup>Optional</sup> <a name="ingressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.ingressTo"></a>

```typescript
public readonly ingressTo: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

ingress_to block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#ingress_to GoogleAccessContextManagerServicePerimeterIngressPolicy#ingress_to}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#timeouts GoogleAccessContextManagerServicePerimeterIngressPolicy#timeouts}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyConfig.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Human readable title. Must be unique within the perimeter. Does not affect behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#title GoogleAccessContextManagerServicePerimeterIngressPolicy#title}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterIngressPolicyIngressFrom: googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identities">identities</a></code> | <code>string[]</code> | Identities can be an individual user, service account, Google group, or third-party identity. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identityType">identityType</a></code> | <code>string</code> | Specifies the type of identities that are allowed access from outside the perimeter. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.sources">sources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>[]</code> | sources block. |

---

##### `identities`<sup>Optional</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identities"></a>

```typescript
public readonly identities: string[];
```

- *Type:* string[]

Identities can be an individual user, service account, Google group, or third-party identity.

For third-party identity, only single identities
are supported and other identity types are not supported.The v1 identities
that have the prefix user, group and serviceAccount in
https://cloud.google.com/iam/docs/principal-identifiers#v1 are supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#identities GoogleAccessContextManagerServicePerimeterIngressPolicy#identities}

---

##### `identityType`<sup>Optional</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

Specifies the type of identities that are allowed access from outside the perimeter.

If left unspecified, then members of 'identities' field will be
allowed access. Possible values: ["ANY_IDENTITY", "ANY_USER_ACCOUNT", "ANY_SERVICE_ACCOUNT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#identity_type GoogleAccessContextManagerServicePerimeterIngressPolicy#identity_type}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom.property.sources"></a>

```typescript
public readonly sources: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>[]

sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#sources GoogleAccessContextManagerServicePerimeterIngressPolicy#sources}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources: googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.accessLevel">accessLevel</a></code> | <code>string</code> | An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.resource">resource</a></code> | <code>string</code> | A Google Cloud resource that is allowed to ingress the perimeter. |

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

An 'AccessLevel' resource name that allow resources within the 'ServicePerimeters' to be accessed from the internet.

'AccessLevels' listed
must be in the same policy as this 'ServicePerimeter'. Referencing a nonexistent
'AccessLevel' will cause an error. If no 'AccessLevel' names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example 'accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.'
If * is specified, then all IngressSources will be allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#access_level GoogleAccessContextManagerServicePerimeterIngressPolicy#access_level}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

A Google Cloud resource that is allowed to ingress the perimeter.

Requests from these resources will be allowed to access perimeter data.
Currently only projects and VPCs are allowed.
Project format: 'projects/{projectNumber}'
VPC network format:
'//compute.googleapis.com/projects/{PROJECT_ID}/global/networks/{NAME}'.
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. '*' is not allowed, the case
of allowing all Google Cloud resources only is not supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#resource GoogleAccessContextManagerServicePerimeterIngressPolicy#resource}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterIngressPolicyIngressTo: googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.property.operations">operations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>[]</code> | operations block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.property.resources">resources</a></code> | <code>string[]</code> | A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'. |

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.property.operations"></a>

```typescript
public readonly operations: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>[]

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#operations GoogleAccessContextManagerServicePerimeterIngressPolicy#operations}

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

A list of resources, currently only projects in the form 'projects/<projectnumber>', protected by this 'ServicePerimeter' that are allowed to be accessed by sources defined in the corresponding 'IngressFrom'.

A request matches if it contains
a resource in this list. If '*' is specified for resources,
then this 'IngressTo' rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the 'operations' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#resources GoogleAccessContextManagerServicePerimeterIngressPolicy#resources}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations: googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.methodSelectors">methodSelectors</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>[]</code> | method_selectors block. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.serviceName">serviceName</a></code> | <code>string</code> | The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow. |

---

##### `methodSelectors`<sup>Optional</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.methodSelectors"></a>

```typescript
public readonly methodSelectors: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>[]

method_selectors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#method_selectors GoogleAccessContextManagerServicePerimeterIngressPolicy#method_selectors}

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

The name of the API whose methods or permissions the 'IngressPolicy' or 'EgressPolicy' want to allow.

A single 'ApiOperation' with 'serviceName'
field set to '*' will allow all methods AND permissions for all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#service_name GoogleAccessContextManagerServicePerimeterIngressPolicy#service_name}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors: googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.method">method</a></code> | <code>string</code> | Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.permission">permission</a></code> | <code>string</code> | Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'. |

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Value for method should be a valid method name for the corresponding serviceName in 'ApiOperation'.

If '*' used as value for 'method', then
ALL methods and permissions are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#method GoogleAccessContextManagerServicePerimeterIngressPolicy#method}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

Value for permission should be a valid Cloud IAM permission for the corresponding 'serviceName' in 'ApiOperation'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#permission GoogleAccessContextManagerServicePerimeterIngressPolicy#permission}

---

### GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

const googleAccessContextManagerServicePerimeterIngressPolicyTimeouts: googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#create GoogleAccessContextManagerServicePerimeterIngressPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#delete GoogleAccessContextManagerServicePerimeterIngressPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#create GoogleAccessContextManagerServicePerimeterIngressPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_access_context_manager_service_perimeter_ingress_policy#delete GoogleAccessContextManagerServicePerimeterIngressPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentities">resetIdentities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentityType">resetIdentityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetSources">resetSources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSources` <a name="putSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.putSources"></a>

```typescript
public putSources(value: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.putSources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>[]

---

##### `resetIdentities` <a name="resetIdentities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentities"></a>

```typescript
public resetIdentities(): void
```

##### `resetIdentityType` <a name="resetIdentityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetIdentityType"></a>

```typescript
public resetIdentityType(): void
```

##### `resetSources` <a name="resetSources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.resetSources"></a>

```typescript
public resetSources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sources">sources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identitiesInput">identitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityTypeInput">identityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sourcesInput">sourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identities">identities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityType">identityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sources"></a>

```typescript
public readonly sources: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList</a>

---

##### `identitiesInput`<sup>Optional</sup> <a name="identitiesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identitiesInput"></a>

```typescript
public readonly identitiesInput: string[];
```

- *Type:* string[]

---

##### `identityTypeInput`<sup>Optional</sup> <a name="identityTypeInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityTypeInput"></a>

```typescript
public readonly identityTypeInput: string;
```

- *Type:* string

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>[]

---

##### `identities`<sup>Required</sup> <a name="identities" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identities"></a>

```typescript
public readonly identities: string[];
```

- *Type:* string[]

---

##### `identityType`<sup>Required</sup> <a name="identityType" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.identityType"></a>

```typescript
public readonly identityType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFrom</a>

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>[]

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessLevel` <a name="resetAccessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetAccessLevel"></a>

```typescript
public resetAccessLevel(): void
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput">accessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevel">accessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevelInput"></a>

```typescript
public readonly accessLevelInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.accessLevel"></a>

```typescript
public readonly accessLevel: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressFromSources</a>

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>[]

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.get"></a>

```typescript
public get(index: number): GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>[]

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission">resetPermission</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetPermission` <a name="resetPermission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.resetPermission"></a>

```typescript
public resetPermission(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput">permissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission">permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `permissionInput`<sup>Optional</sup> <a name="permissionInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permissionInput"></a>

```typescript
public readonly permissionInput: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.permission"></a>

```typescript
public readonly permission: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.putMethodSelectors">putMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors">resetMethodSelectors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMethodSelectors` <a name="putMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.putMethodSelectors"></a>

```typescript
public putMethodSelectors(value: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.putMethodSelectors.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>[]

---

##### `resetMethodSelectors` <a name="resetMethodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetMethodSelectors"></a>

```typescript
public resetMethodSelectors(): void
```

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.resetServiceName"></a>

```typescript
public resetServiceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectors">methodSelectors</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput">methodSelectorsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `methodSelectors`<sup>Required</sup> <a name="methodSelectors" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectors"></a>

```typescript
public readonly methodSelectors: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectorsList</a>

---

##### `methodSelectorsInput`<sup>Optional</sup> <a name="methodSelectorsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.methodSelectorsInput"></a>

```typescript
public readonly methodSelectorsInput: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsMethodSelectors</a>[]

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceNameInput"></a>

```typescript
public readonly serviceNameInput: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.putOperations">putOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetOperations">resetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetResources">resetResources</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOperations` <a name="putOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.putOperations"></a>

```typescript
public putOperations(value: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.putOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>[]

---

##### `resetOperations` <a name="resetOperations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetOperations"></a>

```typescript
public resetOperations(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.resetResources"></a>

```typescript
public resetResources(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operations">operations</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operationsInput">operationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operations"></a>

```typescript
public readonly operations: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperationsList</a>

---

##### `operationsInput`<sup>Optional</sup> <a name="operationsInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.operationsInput"></a>

```typescript
public readonly operationsInput: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOperations</a>[]

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressToOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo">GoogleAccessContextManagerServicePerimeterIngressPolicyIngressTo</a>

---


### GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference <a name="GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAccessContextManagerServicePerimeterIngressPolicy } from '@cdktf/provider-google-beta'

new googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAccessContextManagerServicePerimeterIngressPolicy.GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts">GoogleAccessContextManagerServicePerimeterIngressPolicyTimeouts</a>

---



