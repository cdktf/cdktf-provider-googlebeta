# `googleChronicleRuleDeployment` Submodule <a name="`googleChronicleRuleDeployment` Submodule" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleRuleDeployment <a name="GoogleChronicleRuleDeployment" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment google_chronicle_rule_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer"></a>

```typescript
import { googleChronicleRuleDeployment } from '@cdktf/provider-google-beta'

new googleChronicleRuleDeployment.GoogleChronicleRuleDeployment(scope: Construct, id: string, config: GoogleChronicleRuleDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig">GoogleChronicleRuleDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig">GoogleChronicleRuleDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetAlerting">resetAlerting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetArchived">resetArchived</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetRunFrequency">resetRunFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleChronicleRuleDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>

---

##### `resetAlerting` <a name="resetAlerting" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetAlerting"></a>

```typescript
public resetAlerting(): void
```

##### `resetArchived` <a name="resetArchived" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetArchived"></a>

```typescript
public resetArchived(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRunFrequency` <a name="resetRunFrequency" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetRunFrequency"></a>

```typescript
public resetRunFrequency(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleChronicleRuleDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isConstruct"></a>

```typescript
import { googleChronicleRuleDeployment } from '@cdktf/provider-google-beta'

googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformElement"></a>

```typescript
import { googleChronicleRuleDeployment } from '@cdktf/provider-google-beta'

googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformResource"></a>

```typescript
import { googleChronicleRuleDeployment } from '@cdktf/provider-google-beta'

googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport"></a>

```typescript
import { googleChronicleRuleDeployment } from '@cdktf/provider-google-beta'

googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleChronicleRuleDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleChronicleRuleDeployment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleChronicleRuleDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleChronicleRuleDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archiveTime">archiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.consumerRules">consumerRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.executionState">executionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.lastAlertStatusChangeTime">lastAlertStatusChangeTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.producerRules">producerRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference">GoogleChronicleRuleDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.alertingInput">alertingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archivedInput">archivedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.instanceInput">instanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.ruleInput">ruleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.runFrequencyInput">runFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.alerting">alerting</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.instance">instance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.rule">rule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.runFrequency">runFrequency</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `archiveTime`<sup>Required</sup> <a name="archiveTime" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archiveTime"></a>

```typescript
public readonly archiveTime: string;
```

- *Type:* string

---

##### `consumerRules`<sup>Required</sup> <a name="consumerRules" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.consumerRules"></a>

```typescript
public readonly consumerRules: string[];
```

- *Type:* string[]

---

##### `executionState`<sup>Required</sup> <a name="executionState" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.executionState"></a>

```typescript
public readonly executionState: string;
```

- *Type:* string

---

##### `lastAlertStatusChangeTime`<sup>Required</sup> <a name="lastAlertStatusChangeTime" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.lastAlertStatusChangeTime"></a>

```typescript
public readonly lastAlertStatusChangeTime: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `producerRules`<sup>Required</sup> <a name="producerRules" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.producerRules"></a>

```typescript
public readonly producerRules: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleRuleDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference">GoogleChronicleRuleDeploymentTimeoutsOutputReference</a>

---

##### `alertingInput`<sup>Optional</sup> <a name="alertingInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.alertingInput"></a>

```typescript
public readonly alertingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archivedInput`<sup>Optional</sup> <a name="archivedInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archivedInput"></a>

```typescript
public readonly archivedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.instanceInput"></a>

```typescript
public readonly instanceInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.ruleInput"></a>

```typescript
public readonly ruleInput: string;
```

- *Type:* string

---

##### `runFrequencyInput`<sup>Optional</sup> <a name="runFrequencyInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.runFrequencyInput"></a>

```typescript
public readonly runFrequencyInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleChronicleRuleDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>

---

##### `alerting`<sup>Required</sup> <a name="alerting" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.alerting"></a>

```typescript
public readonly alerting: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `archived`<sup>Required</sup> <a name="archived" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

---

##### `runFrequency`<sup>Required</sup> <a name="runFrequency" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.runFrequency"></a>

```typescript
public readonly runFrequency: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleRuleDeploymentConfig <a name="GoogleChronicleRuleDeploymentConfig" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.Initializer"></a>

```typescript
import { googleChronicleRuleDeployment } from '@cdktf/provider-google-beta'

const googleChronicleRuleDeploymentConfig: googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.instance">instance</a></code> | <code>string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.location">location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.rule">rule</a></code> | <code>string</code> | The Rule ID of the rule. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.alerting">alerting</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether detections resulting from this deployment should be considered alerts. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.archived">archived</a></code> | <code>boolean \| cdktf.IResolvable</code> | The archive state of the rule deployment. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the rule is currently deployed continuously against incoming data. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#id GoogleChronicleRuleDeployment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#project GoogleChronicleRuleDeployment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.runFrequency">runFrequency</a></code> | <code>string</code> | The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.instance"></a>

```typescript
public readonly instance: string;
```

- *Type:* string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#instance GoogleChronicleRuleDeployment#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#location GoogleChronicleRuleDeployment#location}

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.rule"></a>

```typescript
public readonly rule: string;
```

- *Type:* string

The Rule ID of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#rule GoogleChronicleRuleDeployment#rule}

---

##### `alerting`<sup>Optional</sup> <a name="alerting" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.alerting"></a>

```typescript
public readonly alerting: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether detections resulting from this deployment should be considered alerts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#alerting GoogleChronicleRuleDeployment#alerting}

---

##### `archived`<sup>Optional</sup> <a name="archived" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.archived"></a>

```typescript
public readonly archived: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

The archive state of the rule deployment.

Cannot be set to true unless enabled is set to false.
If set to true, alerting will automatically be set to false.
If currently set to true, enabled, alerting, and run_frequency cannot be
updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#archived GoogleChronicleRuleDeployment#archived}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the rule is currently deployed continuously against incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#enabled GoogleChronicleRuleDeployment#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#id GoogleChronicleRuleDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#project GoogleChronicleRuleDeployment#project}.

---

##### `runFrequency`<sup>Optional</sup> <a name="runFrequency" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.runFrequency"></a>

```typescript
public readonly runFrequency: string;
```

- *Type:* string

The run frequency of the rule deployment. Possible values: LIVE HOURLY DAILY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#run_frequency GoogleChronicleRuleDeployment#run_frequency}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleChronicleRuleDeploymentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#timeouts GoogleChronicleRuleDeployment#timeouts}

---

### GoogleChronicleRuleDeploymentTimeouts <a name="GoogleChronicleRuleDeploymentTimeouts" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.Initializer"></a>

```typescript
import { googleChronicleRuleDeployment } from '@cdktf/provider-google-beta'

const googleChronicleRuleDeploymentTimeouts: googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#create GoogleChronicleRuleDeployment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#delete GoogleChronicleRuleDeployment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#update GoogleChronicleRuleDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#create GoogleChronicleRuleDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#delete GoogleChronicleRuleDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.20.0/docs/resources/google_chronicle_rule_deployment#update GoogleChronicleRuleDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleRuleDeploymentTimeoutsOutputReference <a name="GoogleChronicleRuleDeploymentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleChronicleRuleDeployment } from '@cdktf/provider-google-beta'

new googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleChronicleRuleDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleChronicleRuleDeployment.GoogleChronicleRuleDeploymentTimeouts">GoogleChronicleRuleDeploymentTimeouts</a>

---



