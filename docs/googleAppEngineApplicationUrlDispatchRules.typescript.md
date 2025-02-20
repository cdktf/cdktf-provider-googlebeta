# `googleAppEngineApplicationUrlDispatchRules` Submodule <a name="`googleAppEngineApplicationUrlDispatchRules` Submodule" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineApplicationUrlDispatchRules <a name="GoogleAppEngineApplicationUrlDispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules google_app_engine_application_url_dispatch_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

new googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules(scope: Construct, id: string, config: GoogleAppEngineApplicationUrlDispatchRulesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig">GoogleAppEngineApplicationUrlDispatchRulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig">GoogleAppEngineApplicationUrlDispatchRulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putDispatchRules">putDispatchRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDispatchRules` <a name="putDispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putDispatchRules"></a>

```typescript
public putDispatchRules(value: IResolvable | GoogleAppEngineApplicationUrlDispatchRulesDispatchRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putDispatchRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules">GoogleAppEngineApplicationUrlDispatchRulesDispatchRules</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAppEngineApplicationUrlDispatchRulesTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineApplicationUrlDispatchRules resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isConstruct"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformElement"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformResource"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAppEngineApplicationUrlDispatchRules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAppEngineApplicationUrlDispatchRules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAppEngineApplicationUrlDispatchRules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineApplicationUrlDispatchRules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dispatchRules">dispatchRules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList">GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dispatchRulesInput">dispatchRulesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules">GoogleAppEngineApplicationUrlDispatchRulesDispatchRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dispatchRules`<sup>Required</sup> <a name="dispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dispatchRules"></a>

```typescript
public readonly dispatchRules: GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList">GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference">GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference</a>

---

##### `dispatchRulesInput`<sup>Optional</sup> <a name="dispatchRulesInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.dispatchRulesInput"></a>

```typescript
public readonly dispatchRulesInput: IResolvable | GoogleAppEngineApplicationUrlDispatchRulesDispatchRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules">GoogleAppEngineApplicationUrlDispatchRulesDispatchRules</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAppEngineApplicationUrlDispatchRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRules.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineApplicationUrlDispatchRulesConfig <a name="GoogleAppEngineApplicationUrlDispatchRulesConfig" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.Initializer"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

const googleAppEngineApplicationUrlDispatchRulesConfig: googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules">dispatchRules</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules">GoogleAppEngineApplicationUrlDispatchRulesDispatchRules</a>[]</code> | dispatch_rules block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#id GoogleAppEngineApplicationUrlDispatchRules#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#project GoogleAppEngineApplicationUrlDispatchRules#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `dispatchRules`<sup>Required</sup> <a name="dispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.dispatchRules"></a>

```typescript
public readonly dispatchRules: IResolvable | GoogleAppEngineApplicationUrlDispatchRulesDispatchRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules">GoogleAppEngineApplicationUrlDispatchRulesDispatchRules</a>[]

dispatch_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#dispatch_rules GoogleAppEngineApplicationUrlDispatchRules#dispatch_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#id GoogleAppEngineApplicationUrlDispatchRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#project GoogleAppEngineApplicationUrlDispatchRules#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineApplicationUrlDispatchRulesTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#timeouts GoogleAppEngineApplicationUrlDispatchRules#timeouts}

---

### GoogleAppEngineApplicationUrlDispatchRulesDispatchRules <a name="GoogleAppEngineApplicationUrlDispatchRulesDispatchRules" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.Initializer"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

const googleAppEngineApplicationUrlDispatchRulesDispatchRules: googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.path">path</a></code> | <code>string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.service">service</a></code> | <code>string</code> | Pathname within the host. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.domain">domain</a></code> | <code>string</code> | Domain name to match against. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#path GoogleAppEngineApplicationUrlDispatchRules#path}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

Pathname within the host.

Must start with a "/". A single "*" can be included at the end of the path.
The sum of the lengths of the domain and path may not exceed 100 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#service GoogleAppEngineApplicationUrlDispatchRules#service}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Domain name to match against.

The wildcard "*" is supported if specified before a period: "*.".
Defaults to matching all domains: "*".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#domain GoogleAppEngineApplicationUrlDispatchRules#domain}

---

### GoogleAppEngineApplicationUrlDispatchRulesTimeouts <a name="GoogleAppEngineApplicationUrlDispatchRulesTimeouts" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.Initializer"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

const googleAppEngineApplicationUrlDispatchRulesTimeouts: googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#create GoogleAppEngineApplicationUrlDispatchRules#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#delete GoogleAppEngineApplicationUrlDispatchRules#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#update GoogleAppEngineApplicationUrlDispatchRules#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#create GoogleAppEngineApplicationUrlDispatchRules#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#delete GoogleAppEngineApplicationUrlDispatchRules#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_app_engine_application_url_dispatch_rules#update GoogleAppEngineApplicationUrlDispatchRules#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList <a name="GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

new googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.get"></a>

```typescript
public get(index: number): GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules">GoogleAppEngineApplicationUrlDispatchRulesDispatchRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineApplicationUrlDispatchRulesDispatchRules[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules">GoogleAppEngineApplicationUrlDispatchRulesDispatchRules</a>[]

---


### GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference <a name="GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

new googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain">resetDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.resetDomain"></a>

```typescript
public resetDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules">GoogleAppEngineApplicationUrlDispatchRulesDispatchRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineApplicationUrlDispatchRulesDispatchRules;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesDispatchRules">GoogleAppEngineApplicationUrlDispatchRulesDispatchRules</a>

---


### GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference <a name="GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineApplicationUrlDispatchRules } from '@cdktf/provider-google-beta'

new googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineApplicationUrlDispatchRulesTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineApplicationUrlDispatchRules.GoogleAppEngineApplicationUrlDispatchRulesTimeouts">GoogleAppEngineApplicationUrlDispatchRulesTimeouts</a>

---



