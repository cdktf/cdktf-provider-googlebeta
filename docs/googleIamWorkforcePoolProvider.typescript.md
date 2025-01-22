# `googleIamWorkforcePoolProvider` Submodule <a name="`googleIamWorkforcePoolProvider` Submodule" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleIamWorkforcePoolProvider <a name="GoogleIamWorkforcePoolProvider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider google_iam_workforce_pool_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider(scope: Construct, id: string, config: GoogleIamWorkforcePoolProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig">GoogleIamWorkforcePoolProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig">GoogleIamWorkforcePoolProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putExtraAttributesOauth2Client">putExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putOidc">putOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putSaml">putSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetAttributeCondition">resetAttributeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetAttributeMapping">resetAttributeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetExtraAttributesOauth2Client">resetExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetOidc">resetOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetSaml">resetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtraAttributesOauth2Client` <a name="putExtraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putExtraAttributesOauth2Client"></a>

```typescript
public putExtraAttributesOauth2Client(value: GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putExtraAttributesOauth2Client.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `putOidc` <a name="putOidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putOidc"></a>

```typescript
public putOidc(value: GoogleIamWorkforcePoolProviderOidc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a>

---

##### `putSaml` <a name="putSaml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putSaml"></a>

```typescript
public putSaml(value: GoogleIamWorkforcePoolProviderSaml): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putSaml.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleIamWorkforcePoolProviderTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a>

---

##### `resetAttributeCondition` <a name="resetAttributeCondition" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetAttributeCondition"></a>

```typescript
public resetAttributeCondition(): void
```

##### `resetAttributeMapping` <a name="resetAttributeMapping" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetAttributeMapping"></a>

```typescript
public resetAttributeMapping(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetExtraAttributesOauth2Client` <a name="resetExtraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetExtraAttributesOauth2Client"></a>

```typescript
public resetExtraAttributesOauth2Client(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOidc` <a name="resetOidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetOidc"></a>

```typescript
public resetOidc(): void
```

##### `resetSaml` <a name="resetSaml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetSaml"></a>

```typescript
public resetSaml(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleIamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isConstruct"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformElement"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformResource"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleIamWorkforcePoolProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleIamWorkforcePoolProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleIamWorkforcePoolProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleIamWorkforcePoolProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.extraAttributesOauth2Client">extraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference">GoogleIamWorkforcePoolProviderOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference">GoogleIamWorkforcePoolProviderSamlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference">GoogleIamWorkforcePoolProviderTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeConditionInput">attributeConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeMappingInput">attributeMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput">extraAttributesOauth2ClientInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.oidcInput">oidcInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.providerIdInput">providerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.samlInput">samlInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.workforcePoolIdInput">workforcePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeCondition">attributeCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeMapping">attributeMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `extraAttributesOauth2Client`<sup>Required</sup> <a name="extraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.extraAttributesOauth2Client"></a>

```typescript
public readonly extraAttributesOauth2Client: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.oidc"></a>

```typescript
public readonly oidc: GoogleIamWorkforcePoolProviderOidcOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference">GoogleIamWorkforcePoolProviderOidcOutputReference</a>

---

##### `saml`<sup>Required</sup> <a name="saml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.saml"></a>

```typescript
public readonly saml: GoogleIamWorkforcePoolProviderSamlOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference">GoogleIamWorkforcePoolProviderSamlOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolProviderTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference">GoogleIamWorkforcePoolProviderTimeoutsOutputReference</a>

---

##### `attributeConditionInput`<sup>Optional</sup> <a name="attributeConditionInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeConditionInput"></a>

```typescript
public readonly attributeConditionInput: string;
```

- *Type:* string

---

##### `attributeMappingInput`<sup>Optional</sup> <a name="attributeMappingInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeMappingInput"></a>

```typescript
public readonly attributeMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `extraAttributesOauth2ClientInput`<sup>Optional</sup> <a name="extraAttributesOauth2ClientInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.extraAttributesOauth2ClientInput"></a>

```typescript
public readonly extraAttributesOauth2ClientInput: GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `oidcInput`<sup>Optional</sup> <a name="oidcInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.oidcInput"></a>

```typescript
public readonly oidcInput: GoogleIamWorkforcePoolProviderOidc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a>

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.providerIdInput"></a>

```typescript
public readonly providerIdInput: string;
```

- *Type:* string

---

##### `samlInput`<sup>Optional</sup> <a name="samlInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.samlInput"></a>

```typescript
public readonly samlInput: GoogleIamWorkforcePoolProviderSaml;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleIamWorkforcePoolProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a>

---

##### `workforcePoolIdInput`<sup>Optional</sup> <a name="workforcePoolIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.workforcePoolIdInput"></a>

```typescript
public readonly workforcePoolIdInput: string;
```

- *Type:* string

---

##### `attributeCondition`<sup>Required</sup> <a name="attributeCondition" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeCondition"></a>

```typescript
public readonly attributeCondition: string;
```

- *Type:* string

---

##### `attributeMapping`<sup>Required</sup> <a name="attributeMapping" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.attributeMapping"></a>

```typescript
public readonly attributeMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleIamWorkforcePoolProviderConfig <a name="GoogleIamWorkforcePoolProviderConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderConfig: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.location">location</a></code> | <code>string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.providerId">providerId</a></code> | <code>string</code> | The ID for the provider, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.workforcePoolId">workforcePoolId</a></code> | <code>string</code> | The ID to use for the pool, which becomes the final component of the resource name. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.attributeCondition">attributeCondition</a></code> | <code>string</code> | A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.attributeMapping">attributeMapping</a></code> | <code>{[ key: string ]: string}</code> | Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.description">description</a></code> | <code>string</code> | A user-specified description of the provider. Cannot exceed 256 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.disabled">disabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.displayName">displayName</a></code> | <code>string</code> | A user-specified display name for the provider. Cannot exceed 32 characters. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client">extraAttributesOauth2Client</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | extra_attributes_oauth2_client block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#id GoogleIamWorkforcePoolProvider#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.saml">saml</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a></code> | saml block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#location GoogleIamWorkforcePoolProvider#location}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

The ID for the provider, which becomes the final component of the resource name.

This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#provider_id GoogleIamWorkforcePoolProvider#provider_id}

---

##### `workforcePoolId`<sup>Required</sup> <a name="workforcePoolId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.workforcePoolId"></a>

```typescript
public readonly workforcePoolId: string;
```

- *Type:* string

The ID to use for the pool, which becomes the final component of the resource name.

The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#workforce_pool_id GoogleIamWorkforcePoolProvider#workforce_pool_id}

---

##### `attributeCondition`<sup>Optional</sup> <a name="attributeCondition" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.attributeCondition"></a>

```typescript
public readonly attributeCondition: string;
```

- *Type:* string

A [Common Expression Language](https://opensource.google/projects/cel) expression, in plain text, to restrict what otherwise valid authentication credentials issued by the provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:
  * 'assertion': JSON representing the authentication credential issued by the provider.
  * 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
    'google.profile_photo' and 'google.display_name' are not supported.
  * 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters.
If unspecified, all valid authentication credentials will be accepted.

The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':
```
"'admins' in google.groups"
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#attribute_condition GoogleIamWorkforcePoolProvider#attribute_condition}

---

##### `attributeMapping`<sup>Optional</sup> <a name="attributeMapping" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.attributeMapping"></a>

```typescript
public readonly attributeMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Maps attributes from the authentication credentials issued by an external identity provider to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:
  * 'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
    This is also the subject that appears in Cloud Logging logs. This is a required field and
    the mapped subject cannot exceed 127 bytes.
  * 'google.groups': Groups the authenticating user belongs to. You can grant groups access to
    resources using an IAM 'principalSet' binding; access applies to all members of the group.
  * 'google.display_name': The name of the authenticated user. This is an optional field and
    the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
    This attribute cannot be referenced in IAM bindings.
  * 'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
    This is an optional field. When set, the image will be visible as the user's profile picture.
    If not set, a generic user icon will be displayed instead.
    This attribute cannot be referenced in IAM bindings.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:
  * 'google.subject':
    'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
  * 'google.groups':
    'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
  * 'attribute.{custom_attribute}':
    'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For OIDC providers, you must supply a custom mapping that includes the 'google.subject' attribute.
For example, the following maps the sub claim of the incoming credential to the 'subject' attribute
on a Google token:
```
{"google.subject": "assertion.sub"}
```

An object containing a list of '"key": value' pairs.
Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#attribute_mapping GoogleIamWorkforcePoolProvider#attribute_mapping}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A user-specified description of the provider. Cannot exceed 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#description GoogleIamWorkforcePoolProvider#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the provider is disabled. You cannot use a disabled provider to exchange tokens. However, existing tokens still grant access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#disabled GoogleIamWorkforcePoolProvider#disabled}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

A user-specified display name for the provider. Cannot exceed 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#display_name GoogleIamWorkforcePoolProvider#display_name}

---

##### `extraAttributesOauth2Client`<sup>Optional</sup> <a name="extraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.extraAttributesOauth2Client"></a>

```typescript
public readonly extraAttributesOauth2Client: GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a>

extra_attributes_oauth2_client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#extra_attributes_oauth2_client GoogleIamWorkforcePoolProvider#extra_attributes_oauth2_client}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#id GoogleIamWorkforcePoolProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oidc`<sup>Optional</sup> <a name="oidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.oidc"></a>

```typescript
public readonly oidc: GoogleIamWorkforcePoolProviderOidc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#oidc GoogleIamWorkforcePoolProvider#oidc}

---

##### `saml`<sup>Optional</sup> <a name="saml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.saml"></a>

```typescript
public readonly saml: GoogleIamWorkforcePoolProviderSaml;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a>

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#saml GoogleIamWorkforcePoolProvider#saml}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleIamWorkforcePoolProviderTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#timeouts GoogleIamWorkforcePoolProvider#timeouts}

---

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderExtraAttributesOauth2Client: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType">attributesType</a></code> | <code>string</code> | Represents the IdP and type of claims that should be fetched. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId">clientId</a></code> | <code>string</code> | The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri">issuerUri</a></code> | <code>string</code> | The OIDC identity provider's issuer URI. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters">queryParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | query_parameters block. |

---

##### `attributesType`<sup>Required</sup> <a name="attributesType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.attributesType"></a>

```typescript
public readonly attributesType: string;
```

- *Type:* string

Represents the IdP and type of claims that should be fetched.

* AZURE_AD_GROUPS_MAIL: Used to get the user's group claims from the Azure AD identity provider using configuration provided
in ExtraAttributesOAuth2Client and 'mail' property of the 'microsoft.graph.group' object is used for claim mapping.
See https://learn.microsoft.com/en-us/graph/api/resources/group?view=graph-rest-1.0#properties for more details on
'microsoft.graph.group' properties. The attributes obtained from idntity provider are mapped to 'assertion.groups'. Possible values: ["AZURE_AD_GROUPS_MAIL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#attributes_type GoogleIamWorkforcePoolProvider#attributes_type}

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth 2.0 client ID for retrieving extra attributes from the identity provider. Required to get the Access Token using client credentials grant flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#client_id GoogleIamWorkforcePoolProvider#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.clientSecret"></a>

```typescript
public readonly clientSecret: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#client_secret GoogleIamWorkforcePoolProvider#client_secret}

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

The OIDC identity provider's issuer URI.

Must be a valid URI using the 'https' scheme. Required to get the OIDC discovery document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#issuer_uri GoogleIamWorkforcePoolProvider#issuer_uri}

---

##### `queryParameters`<sup>Optional</sup> <a name="queryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client.property.queryParameters"></a>

```typescript
public readonly queryParameters: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

query_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#query_parameters GoogleIamWorkforcePoolProvider#query_parameters}

---

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | value block. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret.property.value"></a>

```typescript
public readonly value: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#value GoogleIamWorkforcePoolProvider#value}

---

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText">plainText</a></code> | <code>string</code> | The plain text of the client secret value. |

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue.property.plainText"></a>

```typescript
public readonly plainText: string;
```

- *Type:* string

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#plain_text GoogleIamWorkforcePoolProvider#plain_text}

---

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter">filter</a></code> | <code>string</code> | The filter used to request specific records from IdP. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

The filter used to request specific records from IdP.

In case of attributes type as AZURE_AD_GROUPS_MAIL, it represents the
filter used to request specific groups for users from IdP. By default, all of the groups associated with the user are fetched. The
groups should be mail enabled and security enabled. See https://learn.microsoft.com/en-us/graph/search-query-parameter for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#filter GoogleIamWorkforcePoolProvider#filter}

---

### GoogleIamWorkforcePoolProviderOidc <a name="GoogleIamWorkforcePoolProviderOidc" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderOidc: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.clientId">clientId</a></code> | <code>string</code> | The client ID. Must match the audience claim of the JWT issued by the identity provider. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.issuerUri">issuerUri</a></code> | <code>string</code> | The OIDC issuer URI. Must be a valid URI using the 'https' scheme. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a></code> | client_secret block. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.jwksJson">jwksJson</a></code> | <code>string</code> | OIDC JWKs in JSON String format. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.webSsoConfig">webSsoConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a></code> | web_sso_config block. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID. Must match the audience claim of the JWT issued by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#client_id GoogleIamWorkforcePoolProvider#client_id}

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

The OIDC issuer URI. Must be a valid URI using the 'https' scheme.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#issuer_uri GoogleIamWorkforcePoolProvider#issuer_uri}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.clientSecret"></a>

```typescript
public readonly clientSecret: GoogleIamWorkforcePoolProviderOidcClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a>

client_secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#client_secret GoogleIamWorkforcePoolProvider#client_secret}

---

##### `jwksJson`<sup>Optional</sup> <a name="jwksJson" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

OIDC JWKs in JSON String format.

For details on definition of a
JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
use the 'jwks_uri' from the discovery document fetched from the
.well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
keys are supported. The JWK must use following format and include only
the following fields:
```
{
  "keys": [
    {
          "kty": "RSA/EC",
          "alg": "<algorithm>",
          "use": "sig",
          "kid": "<key-id>",
          "n": "",
          "e": "",
          "x": "",
          "y": "",
          "crv": ""
    }
  ]
}
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#jwks_json GoogleIamWorkforcePoolProvider#jwks_json}

---

##### `webSsoConfig`<sup>Optional</sup> <a name="webSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc.property.webSsoConfig"></a>

```typescript
public readonly webSsoConfig: GoogleIamWorkforcePoolProviderOidcWebSsoConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a>

web_sso_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#web_sso_config GoogleIamWorkforcePoolProvider#web_sso_config}

---

### GoogleIamWorkforcePoolProviderOidcClientSecret <a name="GoogleIamWorkforcePoolProviderOidcClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderOidcClientSecret: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a></code> | value block. |

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret.property.value"></a>

```typescript
public readonly value: GoogleIamWorkforcePoolProviderOidcClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#value GoogleIamWorkforcePoolProvider#value}

---

### GoogleIamWorkforcePoolProviderOidcClientSecretValue <a name="GoogleIamWorkforcePoolProviderOidcClientSecretValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderOidcClientSecretValue: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue.property.plainText">plainText</a></code> | <code>string</code> | The plain text of the client secret value. |

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue.property.plainText"></a>

```typescript
public readonly plainText: string;
```

- *Type:* string

The plain text of the client secret value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#plain_text GoogleIamWorkforcePoolProvider#plain_text}

---

### GoogleIamWorkforcePoolProviderOidcWebSsoConfig <a name="GoogleIamWorkforcePoolProviderOidcWebSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderOidcWebSsoConfig: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior">assertionClaimsBehavior</a></code> | <code>string</code> | The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.responseType">responseType</a></code> | <code>string</code> | The Response Type to request for in the OIDC Authorization Request for web sign-in. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes">additionalScopes</a></code> | <code>string[]</code> | Additional scopes to request for in the OIDC authentication request on top of scopes requested by default. |

---

##### `assertionClaimsBehavior`<sup>Required</sup> <a name="assertionClaimsBehavior" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.assertionClaimsBehavior"></a>

```typescript
public readonly assertionClaimsBehavior: string;
```

- *Type:* string

The behavior for how OIDC Claims are included in the 'assertion' object used for attribute mapping and attribute condition.

* MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS: Merge the UserInfo Endpoint Claims with ID Token Claims, preferring UserInfo Claim Values for the same Claim Name. This option is available only for the Authorization Code Flow.
* ONLY_ID_TOKEN_CLAIMS: Only include ID Token Claims. Possible values: ["MERGE_USER_INFO_OVER_ID_TOKEN_CLAIMS", "ONLY_ID_TOKEN_CLAIMS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#assertion_claims_behavior GoogleIamWorkforcePoolProvider#assertion_claims_behavior}

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

The Response Type to request for in the OIDC Authorization Request for web sign-in.

The 'CODE' Response Type is recommended to avoid the Implicit Flow, for security reasons.
* CODE: The 'response_type=code' selection uses the Authorization Code Flow for web sign-in. Requires a configured client secret.
* ID_TOKEN: The 'response_type=id_token' selection uses the Implicit Flow for web sign-in. Possible values: ["CODE", "ID_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#response_type GoogleIamWorkforcePoolProvider#response_type}

---

##### `additionalScopes`<sup>Optional</sup> <a name="additionalScopes" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig.property.additionalScopes"></a>

```typescript
public readonly additionalScopes: string[];
```

- *Type:* string[]

Additional scopes to request for in the OIDC authentication request on top of scopes requested by default.

By default, the 'openid', 'profile' and 'email' scopes that are supported by the identity provider are requested.
Each additional scope may be at most 256 characters. A maximum of 10 additional scopes may be configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#additional_scopes GoogleIamWorkforcePoolProvider#additional_scopes}

---

### GoogleIamWorkforcePoolProviderSaml <a name="GoogleIamWorkforcePoolProviderSaml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderSaml: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml.property.idpMetadataXml">idpMetadataXml</a></code> | <code>string</code> | SAML Identity provider configuration metadata xml doc. |

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml.property.idpMetadataXml"></a>

```typescript
public readonly idpMetadataXml: string;
```

- *Type:* string

SAML Identity provider configuration metadata xml doc.

The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
The max size of the acceptable xml document will be bounded to 128k characters.

The metadata xml document should satisfy the following constraints:
1) Must contain an Identity Provider Entity ID.
2) Must contain at least one non-expired signing key certificate.
3) For each signing key:
  a) Valid from should be no more than 7 days from now.
  b) Valid to should be no more than 10 years in the future.
4) Up to 3 IdP signing keys are allowed in the metadata xml.

When updating the provider's metadata xml, at least one non-expired signing key
must overlap with the existing metadata. This requirement is skipped if there are
no non-expired signing keys present in the existing metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#idp_metadata_xml GoogleIamWorkforcePoolProvider#idp_metadata_xml}

---

### GoogleIamWorkforcePoolProviderTimeouts <a name="GoogleIamWorkforcePoolProviderTimeouts" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

const googleIamWorkforcePoolProviderTimeouts: googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#create GoogleIamWorkforcePoolProvider#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#delete GoogleIamWorkforcePoolProvider#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#update GoogleIamWorkforcePoolProvider#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#create GoogleIamWorkforcePoolProvider#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#delete GoogleIamWorkforcePoolProvider#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.17.0/docs/resources/google_iam_workforce_pool_provider#update GoogleIamWorkforcePoolProvider#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue"></a>

```typescript
public putValue(value: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.value"></a>

```typescript
public readonly value: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---


### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput">plainTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText">plainText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `plainTextInput`<sup>Optional</sup> <a name="plainTextInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainTextInput"></a>

```typescript
public readonly plainTextInput: string;
```

- *Type:* string

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.plainText"></a>

```typescript
public readonly plainText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretValue</a>

---


### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters">putQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters">resetQueryParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret"></a>

```typescript
public putClientSecret(value: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `putQueryParameters` <a name="putQueryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters"></a>

```typescript
public putQueryParameters(value: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.putQueryParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `resetQueryParameters` <a name="resetQueryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.resetQueryParameters"></a>

```typescript
public resetQueryParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters">queryParameters</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput">attributesTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput">queryParametersInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType">attributesType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecretOutputReference</a>

---

##### `queryParameters`<sup>Required</sup> <a name="queryParameters" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParameters"></a>

```typescript
public readonly queryParameters: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference</a>

---

##### `attributesTypeInput`<sup>Optional</sup> <a name="attributesTypeInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesTypeInput"></a>

```typescript
public readonly attributesTypeInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientClientSecret</a>

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUriInput"></a>

```typescript
public readonly issuerUriInput: string;
```

- *Type:* string

---

##### `queryParametersInput`<sup>Optional</sup> <a name="queryParametersInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.queryParametersInput"></a>

```typescript
public readonly queryParametersInput: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---

##### `attributesType`<sup>Required</sup> <a name="attributesType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.attributesType"></a>

```typescript
public readonly attributesType: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client">GoogleIamWorkforcePoolProviderExtraAttributesOauth2Client</a>

---


### GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference <a name="GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.resetFilter"></a>

```typescript
public resetFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters">GoogleIamWorkforcePoolProviderExtraAttributesOauth2ClientQueryParameters</a>

---


### GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference <a name="GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.putValue">putValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValue` <a name="putValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.putValue"></a>

```typescript
public putValue(value: GoogleIamWorkforcePoolProviderOidcClientSecretValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.value">value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference">GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput">valueInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.value"></a>

```typescript
public readonly value: GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference">GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: GoogleIamWorkforcePoolProviderOidcClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderOidcClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a>

---


### GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference <a name="GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint">thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput">plainTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText">plainText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `thumbprint`<sup>Required</sup> <a name="thumbprint" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.thumbprint"></a>

```typescript
public readonly thumbprint: string;
```

- *Type:* string

---

##### `plainTextInput`<sup>Optional</sup> <a name="plainTextInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainTextInput"></a>

```typescript
public readonly plainTextInput: string;
```

- *Type:* string

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.plainText"></a>

```typescript
public readonly plainText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderOidcClientSecretValue;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretValue">GoogleIamWorkforcePoolProviderOidcClientSecretValue</a>

---


### GoogleIamWorkforcePoolProviderOidcOutputReference <a name="GoogleIamWorkforcePoolProviderOidcOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putClientSecret">putClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig">putWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetJwksJson">resetJwksJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig">resetWebSsoConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientSecret` <a name="putClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putClientSecret"></a>

```typescript
public putClientSecret(value: GoogleIamWorkforcePoolProviderOidcClientSecret): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a>

---

##### `putWebSsoConfig` <a name="putWebSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig"></a>

```typescript
public putWebSsoConfig(value: GoogleIamWorkforcePoolProviderOidcWebSsoConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.putWebSsoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetJwksJson` <a name="resetJwksJson" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetJwksJson"></a>

```typescript
public resetJwksJson(): void
```

##### `resetWebSsoConfig` <a name="resetWebSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.resetWebSsoConfig"></a>

```typescript
public resetWebSsoConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientSecret">clientSecret</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference">GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig">webSsoConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference">GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput">issuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput">jwksJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput">webSsoConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.issuerUri">issuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.jwksJson">jwksJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference">GoogleIamWorkforcePoolProviderOidcClientSecretOutputReference</a>

---

##### `webSsoConfig`<sup>Required</sup> <a name="webSsoConfig" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.webSsoConfig"></a>

```typescript
public readonly webSsoConfig: GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference">GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: GoogleIamWorkforcePoolProviderOidcClientSecret;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcClientSecret">GoogleIamWorkforcePoolProviderOidcClientSecret</a>

---

##### `issuerUriInput`<sup>Optional</sup> <a name="issuerUriInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.issuerUriInput"></a>

```typescript
public readonly issuerUriInput: string;
```

- *Type:* string

---

##### `jwksJsonInput`<sup>Optional</sup> <a name="jwksJsonInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.jwksJsonInput"></a>

```typescript
public readonly jwksJsonInput: string;
```

- *Type:* string

---

##### `webSsoConfigInput`<sup>Optional</sup> <a name="webSsoConfigInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.webSsoConfigInput"></a>

```typescript
public readonly webSsoConfigInput: GoogleIamWorkforcePoolProviderOidcWebSsoConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `issuerUri`<sup>Required</sup> <a name="issuerUri" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.issuerUri"></a>

```typescript
public readonly issuerUri: string;
```

- *Type:* string

---

##### `jwksJson`<sup>Required</sup> <a name="jwksJson" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.jwksJson"></a>

```typescript
public readonly jwksJson: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderOidc;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidc">GoogleIamWorkforcePoolProviderOidc</a>

---


### GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference <a name="GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes">resetAdditionalScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalScopes` <a name="resetAdditionalScopes" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.resetAdditionalScopes"></a>

```typescript
public resetAdditionalScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput">additionalScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput">assertionClaimsBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput">responseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes">additionalScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior">assertionClaimsBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType">responseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalScopesInput`<sup>Optional</sup> <a name="additionalScopesInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopesInput"></a>

```typescript
public readonly additionalScopesInput: string[];
```

- *Type:* string[]

---

##### `assertionClaimsBehaviorInput`<sup>Optional</sup> <a name="assertionClaimsBehaviorInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehaviorInput"></a>

```typescript
public readonly assertionClaimsBehaviorInput: string;
```

- *Type:* string

---

##### `responseTypeInput`<sup>Optional</sup> <a name="responseTypeInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseTypeInput"></a>

```typescript
public readonly responseTypeInput: string;
```

- *Type:* string

---

##### `additionalScopes`<sup>Required</sup> <a name="additionalScopes" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.additionalScopes"></a>

```typescript
public readonly additionalScopes: string[];
```

- *Type:* string[]

---

##### `assertionClaimsBehavior`<sup>Required</sup> <a name="assertionClaimsBehavior" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.assertionClaimsBehavior"></a>

```typescript
public readonly assertionClaimsBehavior: string;
```

- *Type:* string

---

##### `responseType`<sup>Required</sup> <a name="responseType" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.responseType"></a>

```typescript
public readonly responseType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderOidcWebSsoConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderOidcWebSsoConfig">GoogleIamWorkforcePoolProviderOidcWebSsoConfig</a>

---


### GoogleIamWorkforcePoolProviderSamlOutputReference <a name="GoogleIamWorkforcePoolProviderSamlOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput">idpMetadataXmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml">idpMetadataXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idpMetadataXmlInput`<sup>Optional</sup> <a name="idpMetadataXmlInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXmlInput"></a>

```typescript
public readonly idpMetadataXmlInput: string;
```

- *Type:* string

---

##### `idpMetadataXml`<sup>Required</sup> <a name="idpMetadataXml" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.idpMetadataXml"></a>

```typescript
public readonly idpMetadataXml: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSamlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleIamWorkforcePoolProviderSaml;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderSaml">GoogleIamWorkforcePoolProviderSaml</a>

---


### GoogleIamWorkforcePoolProviderTimeoutsOutputReference <a name="GoogleIamWorkforcePoolProviderTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleIamWorkforcePoolProvider } from '@cdktf/provider-google-beta'

new googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleIamWorkforcePoolProviderTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleIamWorkforcePoolProvider.GoogleIamWorkforcePoolProviderTimeouts">GoogleIamWorkforcePoolProviderTimeouts</a>

---



